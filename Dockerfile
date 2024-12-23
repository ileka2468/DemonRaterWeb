# check=skip=SecretsUsedInArgOrEnv
# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 

ENV NEXT_PUBLIC_SUPABASE_URL=https://zahmwdxhmusgksbqxfxs.supabase.co
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphaG13ZHhobXVzZ2tzYnF4ZnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5OTQ1MzcsImV4cCI6MjAyNDU3MDUzN30.eR9AG2_hQtgYumz8QuGZpEFtPLvGvDagdJypOMrG9nM

RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY package*.json ./
RUN npm install --production
EXPOSE 3002
CMD ["npm", "start", "--", "-p", "3002"]
