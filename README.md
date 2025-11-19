# Pokemon Tiles Application

Display the first 8 pokemons of a pokemon API

## Getting Started

### Prerequisites

NodeJS 18 or higher requried

### Installation

1. Go to project directory:
```bash
cd tech_task
```

2. Install the dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000)

You should see the pokemons

## My Approach

### Architecture Choices

I’m using Next.js 16 with the App Router, and most of the project runs on Server Components. It keeps things fast, helps with SEO, and cuts down the amount of JavaScript sent to the client. Since the data loads on the server, users see content immediately.

For loading states, I rely on React Suspense instead of manually tracking state with hooks. 

I also kept logic separated
1. API logic goes in lib/api/
2. lib/utilities/ for helpers
3. reusable UI components stay in app/components/
4. TypeScript interfaces are stored in lib/interfaces/

The Pokémon ID is pulled out of the URL with a small regex, so I don’t need to make 8 extra fetch requests just to get IDs. It’s faster and lighter.

Finally, the images are handled through the Next.js Image component to get automatic optimization, lazy loading


## Assumptions

1. **API Reliability**: PokemonAPI always returns data in expected format. For prod build a more robus error handling is desired
2. **Image Availability**: Assumed all pokemons have their images available at the given url.

## Trade-offs

**Server Components vs Client Components**
- **Chose**: Server Components for better performance
- **Trade-off**: Can't use hooks like useState directly in the main component
- **Solution**: Used Suspense for loading states, which is the recommended Next.js pattern

**Extracting ID from URL vs API Call**
- **Chose**: Extract ID using regex from the URL
- **Trade-off**: Depends the URL to be consistent
- **Why**: Avoids 8 extra HTTP requests

## Time Breakdown

**Time spent: About 1.5 hours**

## Project Structure

```
tech_task/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Error.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Loading.tsx
│   │   └── TileComponent.tsx
│   ├── tiles/               # Tiles page and related files
│   │   ├── page.tsx         # Main tiles page (Server Component)
│   │   ├── loading.tsx      # Loading state
│   │   ├── error.tsx        # Error boundary
│   │   └── style.css        # Page-specific styles
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with Inter font
│   └── page.tsx             # Home page
├── lib/
│   ├── api/
│   │   └── pokemon.ts       # API functions
│   ├── constants/
│   │   └── config.ts        # App constants
│   ├── interfaces/          # TypeScript type definitions
│   └── utilities/           # Helper functions
│       ├── extractPokemonId.ts
│       └── generatePokemonImageUrl.ts
└── next.config.ts           # Next.js configuration
```