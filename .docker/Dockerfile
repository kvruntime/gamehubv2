FROM node:22-alpine
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
ENV NEXT_PUBLIC_RAWG_KEY=sdkfhdjdsfjdskfh77877jhjdsfdhd6_invalid
EXPOSE 80
CMD  npx next telemetry disable||true && npm run dev