import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryImages = [
    {
        src: '/1.jpeg',
        title: 'Endoscopy Procedure',
        description: 'Advanced upper GI endoscopy being performed with state-of-the-art equipment'
    },
    {
        src: '/2.jpeg',
        title: 'Diagnostic Procedure',
        description: 'Real-time visualization during diagnostic endoscopy procedure'
    },
    {
        src: '/3.jpeg',
        title: 'Endoscopy Station',
        description: 'Precise examination with high-definition endoscopic imaging'
    },
    {
        src: '/4.jpeg',
        title: 'GI Intervention',
        description: 'Expert gastroenterological intervention in progress'
    }
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (selectedImage === null) return;
        if (direction === 'prev') {
            setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
        } else {
            setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
        }
    };

    return (
        <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-4">
                        <Camera className="h-5 w-5 text-blue-400" />
                        <span className="text-blue-400 font-medium">Our Work</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Procedure Gallery</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A glimpse into our state-of-the-art endoscopy procedures and advanced gastroenterology care
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4] shadow-xl"
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-lg font-bold text-white mb-2">{image.title}</h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {image.description}
                                </p>
                            </div>

                            {/* Hover Ring Effect */}
                            <div className="absolute inset-0 border-4 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-300" />
                        </div>
                    ))}
                </div>

                {/* View More Indicator */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 text-sm">
                        Click on any image to view in full screen
                    </p>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                    >
                        <X className="h-6 w-6 text-white" />
                    </button>

                    {/* Navigation - Previous */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage('prev');
                        }}
                        className="absolute left-6 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                    >
                        <ChevronLeft className="h-8 w-8 text-white" />
                    </button>

                    {/* Navigation - Next */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage('next');
                        }}
                        className="absolute right-6 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                    >
                        <ChevronRight className="h-8 w-8 text-white" />
                    </button>

                    {/* Image Container */}
                    <div
                        className="max-w-4xl max-h-[85vh] mx-auto px-16"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={galleryImages[selectedImage].src}
                            alt={galleryImages[selectedImage].title}
                            className="max-h-[75vh] w-auto mx-auto rounded-xl shadow-2xl"
                        />
                        <div className="text-center mt-6">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {galleryImages[selectedImage].title}
                            </h3>
                            <p className="text-gray-400">
                                {galleryImages[selectedImage].description}
                            </p>
                            <div className="flex justify-center gap-2 mt-4">
                                {galleryImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage(index);
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all ${index === selectedImage
                                                ? 'bg-blue-500 w-8'
                                                : 'bg-white/30 hover:bg-white/60'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
