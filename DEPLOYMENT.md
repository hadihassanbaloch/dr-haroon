# Deployment Configuration for Websouls Hosting

This project is configured with automated CI/CD deployment to Websouls hosting.

## Setup Instructions

### 1. GitHub Secrets Configuration

Add the following secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- `SFTP_SERVER`: Your Websouls server hostname (e.g., `yoursite.websouls.com` or IP address)
- `SFTP_USERNAME`: Your FTP/SFTP username provided by Websouls
- `SFTP_PASSWORD`: Your FTP/SFTP password provided by Websouls

### 2. Deployment Process

The CI/CD pipeline automatically:

1. **Triggers** on every push to the `main` branch
2. **Installs** dependencies using `npm ci`
3. **Type checks** the TypeScript code
4. **Lints** the code using ESLint
5. **Builds** the production bundle using Vite
6. **Deploys** the built files to your Websouls hosting

### 3. Manual Deployment

If you prefer manual deployment, you can:

1. Run the build command:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist/` folder to your Websouls `public_html` directory via FTP/SFTP

### 4. Build Output

The build process creates optimized files in the `dist/` directory:
- Minified JavaScript and CSS
- Optimized images and assets
- Production-ready HTML

### 5. Websouls Hosting Requirements

Make sure your Websouls hosting plan supports:
- Static file hosting
- FTP/SFTP access
- Node.js applications (if using server-side features)

### 6. Troubleshooting

- **Build fails**: Check Node.js version compatibility (requires Node 18+)
- **Deployment fails**: Verify SFTP credentials and server connectivity
- **Site not loading**: Check if files are uploaded to the correct directory (`public_html`)

### 7. Environment Variables

If your application uses environment variables, add them to:
- GitHub Secrets (for CI/CD)
- Websouls hosting environment (if applicable)

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking