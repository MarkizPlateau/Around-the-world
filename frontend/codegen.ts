import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

// Załaduj zmienne z .env
dotenv.config();

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  documents: ['src/**/*.tsx', 'src/graphql/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/generates/': {
      preset: 'client',
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
