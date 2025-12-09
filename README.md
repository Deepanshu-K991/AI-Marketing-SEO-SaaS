# AI-Powered SEO Reporting SaaS

> Generate comprehensive SEO reports instantly using Bright Data's SERP scraping technology and AI-powered analysis.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)](https://react.dev/)
[![Convex](https://img.shields.io/badge/Convex-1.29.1-purple?logo=convex)](https://convex.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-0.1.0-orange)](package.json)

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration--environment-variables)
- [API Endpoints](#api-endpoints)
- [Screenshots / Demo](#screenshots--demo)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## Introduction

AI-Powered SEO Reporting SaaS is a modern web application that leverages Bright Data's advanced SERP (Search Engine Results Page) scraping technology to generate comprehensive SEO reports in seconds. The platform combines powerful data collection with AI-driven analysis to provide actionable insights for businesses and marketers.

**Key Highlights:**
- ⚡ **Fast & Efficient**: Generate detailed SEO reports in seconds
- 🤖 **AI-Powered**: Intelligent analysis using OpenAI and Google AI models
- 📊 **Comprehensive Insights**: Keyword rankings, competitor analysis, and recommendations
- 💬 **Interactive Chat**: Ask questions about your SEO data with AI-powered chat interface
- 🔒 **Secure**: Enterprise-grade authentication and data protection

---

## Features

### Core Features

- **SERP Scraping**: Utilize Bright Data's Perplexity Scraper to collect comprehensive search engine data
- **SEO Report Generation**: Automatically generate structured SEO reports with:
  - Overall performance scores and confidence metrics
  - Keyword analysis and search visibility insights
  - Competitor analysis and market positioning
  - Source inventory and domain analysis
  - Backlink profile and authority metrics
  - Content gaps and optimization opportunities
  - Actionable recommendations

- **AI Chat Interface** (Pro Plan):
  - Interactive conversations with your SEO data
  - Ask questions and get data-driven insights
  - Receive specific recommendations based on your report

- **Report Management**:
  - View all your reports in a centralized dashboard
  - Track job status (pending, running, analyzing, completed, failed)
  - Retry failed analyses with smart retry functionality
  - Export reports (PDF/CSV support - placeholder)

- **User Authentication**: Secure authentication powered by Clerk
- **Multi-country Support**: Analyze SEO data for different geographic regions
- **Real-time Updates**: Track scraping and analysis progress in real-time

### Pricing Tiers

- **Starter Plan**: Full SEO reports with SERP analysis, keyword insights, competitor analysis, and export capabilities
- **Pro Plan**: All Starter features plus AI-powered chat interface and priority support

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.5.4 | React framework with App Router |
| [React](https://react.dev/) | 19.0.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.0 | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | 4.0 | Utility-first CSS framework |
| [Radix UI](https://www.radix-ui.com/) | Latest | Accessible component primitives |
| [Recharts](https://recharts.org/) | 2.15.4 | Chart library for data visualization |
| [Lucide React](https://lucide.dev/) | 0.555.0 | Icon library |

### Backend & Services

| Technology | Version | Purpose |
|------------|---------|---------|
| [Convex](https://convex.dev/) | 1.29.1 | Backend-as-a-Service (database, serverless functions) |
| [Clerk](https://clerk.com/) | 6.12.6 | Authentication and user management |
| [Bright Data](https://brightdata.com/) | - | SERP scraping and data collection |
| [OpenAI](https://openai.com/) | - | AI model for analysis and chat |
| [Google AI](https://ai.google.dev/) | - | Gemini model for chat interface |

### AI & SDKs

| Package | Version | Purpose |
|---------|---------|---------|
| [Vercel AI SDK](https://sdk.vercel.ai/) | 5.0.106 | AI integration and streaming |
| [@ai-sdk/openai](https://sdk.vercel.ai/providers/ai-sdk-providers/openai) | 2.0.77 | OpenAI provider |
| [@ai-sdk/google](https://sdk.vercel.ai/providers/ai-sdk-providers/google) | 2.0.44 | Google AI provider |
| [@ai-sdk/react](https://sdk.vercel.ai/providers/ai-sdk-providers/react) | 2.0.106 | React hooks for AI |

### Development Tools

- **ESLint**: Code linting and quality checks
- **Prettier**: Code formatting
- **npm-run-all**: Parallel script execution

---

## Project Structure

```
ai-saas/
├── app/                          # Next.js App Router pages
│   ├── api/                      # API routes
│   │   └── chat/                 # AI chat API endpoint
│   ├── dashboard/                # Dashboard pages
│   │   ├── page.tsx              # Main dashboard
│   │   └── report/               # Report viewing pages
│   │       └── [id]/             # Dynamic report pages
│   ├── pricing/                  # Pricing page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── actions/                      # Server actions
│   ├── startScraping.ts          # Initiate scraping job
│   └── retryAnalysis.ts          # Retry failed analysis
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── AIChat.tsx                # AI chat interface
│   ├── Header.tsx                # Navigation header
│   ├── ReportsTable.tsx          # Reports listing table
│   └── ...
├── convex/                       # Convex backend
│   ├── schema.ts                 # Database schema
│   ├── scrapingJobs.ts           # Scraping jobs mutations/queries
│   ├── analysis.ts               # Analysis functions
│   ├── http.ts                   # HTTP endpoints (webhooks)
│   └── auth.config.ts            # Authentication configuration
├── lib/                          # Utility libraries
│   ├── utils.ts                  # General utilities
│   ├── status-utils.ts           # Status helper functions
│   └── seo-schema.ts             # SEO data schemas
├── prompts/                      # AI prompt templates
│   ├── gpt.ts                    # GPT analysis prompts
│   └── perplexity.ts             # Perplexity scraping prompts
├── public/                       # Static assets
├── middleware.ts                 # Next.js middleware
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── next.config.ts                # Next.js configuration
```

---

## Installation

### Prerequisites

- **Node.js**: Version 18.x or higher
- **npm** or **pnpm**: Package manager
- **Convex Account**: Sign up at [convex.dev](https://convex.dev)
- **Clerk Account**: Sign up at [clerk.com](https://clerk.com)
- **Bright Data Account**: Sign up at [brightdata.com](https://brightdata.com)
- **OpenAI API Key**: Get from [platform.openai.com](https://platform.openai.com)
- **Google AI API Key**: Get from [ai.google.dev](https://ai.google.dev)

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up Convex**
   ```bash
   npx convex dev
   ```
   Follow the prompts to create a new Convex project or link to an existing one.

4. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
   
   Then fill in the required environment variables (see [Configuration](#configuration--environment-variables) section).

5. **Set up Clerk Authentication**
   - Create a Clerk application at [clerk.com](https://clerk.com)
   - Copy your Clerk keys to `.env.local`
   - Follow the [Convex Clerk onboarding guide](https://docs.convex.dev/auth/clerk#get-started) to create a Convex JWT template
   - Uncomment the Clerk provider in `convex/auth.config.ts`
   - Add `CLERK_JWT_ISSUER_DOMAIN` to your Convex dashboard environment variables

6. **Configure Bright Data**
   - Create a Bright Data account and dataset
   - Add your API key and dataset ID to `.env.local`

7. **Start the development server**
   ```bash
   npm run dev
   ```
   
   This will start both the Next.js frontend and Convex backend in parallel.

8. **Open your application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Convex Dashboard: Check terminal output for the dashboard URL

---

## Usage

### Starting a New SEO Report

1. **Sign in** to your account using Clerk authentication
2. Navigate to the **Dashboard**
3. Click **"Generate My Report"** or use the report creation form
4. Enter your search query or entity name
5. Select your target country (default: US)
6. Click **"Start Analysis"**
7. Monitor the job status as it progresses through:
   - `pending` → `running` → `analyzing` → `completed`
8. View your completed report with comprehensive SEO insights

### Using the AI Chat Interface (Pro Plan)

1. Open a completed SEO report
2. Navigate to the **Chat** section
3. Ask questions about your SEO data, such as:
   - "What are my top keywords?"
   - "How do I compare to my competitors?"
   - "What recommendations do you have for improvement?"
4. Receive AI-powered insights based on your actual report data

### Retrying Failed Jobs

- If a scraping job fails, you can retry it from the dashboard
- The system will attempt a "smart retry" (analysis-only) if the scraping data is still valid
- Otherwise, it will perform a full retry with new scraping

### Available Scripts

```bash
# Start development server (frontend + backend)
npm run dev

# Start frontend only
npm run dev:frontend

# Start backend only
npm run dev:backend

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## Configuration / Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Required Variables

```env
# Convex
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
NEXT_PUBLIC_CONVEX_SITE_URL=http://localhost:3000  # or your production URL

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Bright Data
BRIGHTDATA_API_KEY=your_brightdata_api_key
BRIGHTDATA_DATASET_ID=your_dataset_id

# OpenAI (for analysis)
OPENAI_API_KEY=sk-...

# Google AI (for chat)
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_key
```

### Optional Variables

```env
# Clerk JWT Issuer (set in Convex dashboard)
CLERK_JWT_ISSUER_DOMAIN=https://your-clerk-domain.clerk.accounts.dev
```

### Setting Environment Variables in Convex

1. Go to your Convex Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the required variables (especially `CLERK_JWT_ISSUER_DOMAIN`)

---

## API Endpoints

### Frontend API Routes

#### `POST /api/chat`

AI chat endpoint for interacting with SEO reports.

**Request Body:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "What are my top keywords?"
    }
  ],
  "id": "report_snapshot_id"
}
```

**Response:** Streaming text response (Server-Sent Events)

**Authentication:** Required (Clerk session)

### Convex HTTP Endpoints

#### `POST /convex/http/webhook`

Webhook endpoint for receiving Bright Data scraping results.

**Query Parameters:**
- `jobId`: The scraping job ID

**Request Body:** Bright Data webhook payload

**Authentication:** Internal (Convex)

### Convex Queries & Mutations

#### Queries

- `scrapingJobs.getUserJobs`: Get all jobs for the current user
- `scrapingJobs.getJobBySnapshotId`: Get a job by snapshot ID
- `scrapingJobs.canUseSmartRetry`: Check if smart retry is available

#### Mutations

- `scrapingJobs.createScrapingJob`: Create a new scraping job
- `scrapingJobs.updateJobWithSnapshotId`: Update job with snapshot ID
- `scrapingJobs.updateJobStatus`: Update job status
- `scrapingJobs.failJob`: Mark job as failed
- `scrapingJobs.retryJob`: Retry a failed job

---

## Screenshots / Demo

> **Note**: Screenshots and demo videos will be added here. For now, you can run the application locally to see it in action.

### Planned Screenshots

- [ <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/36dd3557-6592-4f91-bfaa-9645094c502b" />
] Landing page with hero section
- [<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9b703a61-a5a5-40b0-b2c7-b58562645bb6" />
 ] Dashboard with reports table
- [<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/cd3678fc-e529-427d-8de7-b4bf992b2c75" />
 ] SEO report detail view
- [<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/50aebf21-5118-4a6e-be2e-f893e7aa498a" />
 ] AI chat interface
- [<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1ca73f7b-9f65-4fde-9880-846ad570e206" />
 ] Pricing page

### Live Demo

> **Coming Soon**: A live demo will be available at [your-demo-url.com](https://your-demo-url.com)

---

## Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines

- Follow the existing code style and formatting (Prettier + ESLint)
- Write clear commit messages
- Add tests for new features (when applicable)
- Update documentation as needed
- Ensure all linting checks pass (`npm run lint`)

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community

### Reporting Issues

If you find a bug or have a feature request, please open an issue on GitHub with:
- A clear description of the problem
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Screenshots (if applicable)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

> **Note**: If a LICENSE file doesn't exist, you may need to create one or specify your preferred license.

---

## Contact

### Project Maintainer

- **Name**: [Your Name]
- **Email**: [your.email@example.com]
- **GitHub**: [@yourusername](https://github.com/yourusername)

### Support

- **Documentation**: [Link to documentation]
- **Issues**: [GitHub Issues](https://github.com/yourusername/ai-saas/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/ai-saas/discussions)

### Social Media

- **Twitter**: [@yourhandle](https://twitter.com/yourhandle)
- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourprofile)

---

## Acknowledgments

### Technologies & Services

- **[Convex](https://convex.dev/)**: For providing an excellent backend-as-a-service platform
- **[Next.js](https://nextjs.org/)**: For the powerful React framework
- **[Clerk](https://clerk.com/)**: For seamless authentication
- **[Bright Data](https://brightdata.com/)**: For reliable SERP scraping capabilities
- **[OpenAI](https://openai.com/)**: For AI-powered analysis
- **[Google AI](https://ai.google.dev/)**: For the Gemini chat model
- **[Vercel](https://vercel.com/)**: For deployment and hosting (if applicable)

### Libraries & Tools

- **[Radix UI](https://www.radix-ui.com/)**: For accessible component primitives
- **[Tailwind CSS](https://tailwindcss.com/)**: For utility-first styling
- **[Recharts](https://recharts.org/)**: For data visualization
- **[Lucide](https://lucide.dev/)**: For beautiful icons

### Inspiration

- Built with inspiration from modern SaaS applications and best practices in web development

---

## Additional Resources

### Documentation

- [Convex Documentation](https://docs.convex.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Bright Data API Docs](https://docs.brightdata.com/)

### Learning Resources

- [Convex Tour](https://docs.convex.dev/get-started)
- [Next.js Learn](https://nextjs.org/learn)
- [React Documentation](https://react.dev/)

### Community

- [Convex Discord](https://convex.dev/community)
- [Next.js Discord](https://nextjs.org/discord)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

**Made with ❤️ using Next.js, Convex, and AI**
