# Use a small Node image; 20 LTS is solid
FROM node:20-alpine

# App working directory inside the container
WORKDIR /app

# Install deps using cached layers
COPY package*.json ./
RUN npm ci || npm install

# Copy the rest of your client code
COPY . .

# Make the dev server reachable from outside the container
ENV HOST=0.0.0.0
ENV PORT=3000

# Improve file-change detection on macOS/Windows bind mounts
ENV CHOKIDAR_USEPOLLING=true

EXPOSE 3000
CMD ["npm", "start"]
