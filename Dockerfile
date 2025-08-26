# Match your project’s Ruby (you were on 3.2.2 earlier)
FROM ruby:3.2.2-slim

# OS packages needed to compile gems (pg, etc.)
RUN apt-get update -y && apt-get install -y --no-install-recommends \
    build-essential libpq-dev git curl bash \
 && rm -rf /var/lib/apt/lists/*

# App directory
WORKDIR /app

# Install gems (copy Gemfiles first for Docker layer caching)
COPY Gemfile Gemfile.lock ./
RUN gem install bundler -v 2.4.21 && bundle install

# Copy the rest of the app
COPY . .

# Dev ergonomics
ENV DISABLE_SPRING=1
EXPOSE 3000

# Rails server (will be overridden by compose if needed)
CMD ["bash", "-lc", "bin/rails s -b 0.0.0.0 -p 3000"]
