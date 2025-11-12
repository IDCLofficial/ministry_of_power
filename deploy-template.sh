#!/bin/bash

# Website Deployment Script Template
# Copy this file and customize for each website

# Configuration
WEBSITE_NAME="your-website-name"
SSH_HOST="your-ssh-host-alias"
DEPLOY_PATH="/var/www/$WEBSITE_NAME"
REPO_URL="git@github.com:username/repo-name.git"
BRANCH="main"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Deploying $WEBSITE_NAME to $SSH_HOST${NC}"

# Build the project locally
echo -e "${YELLOW}📦 Building project...${NC}"
npm run build

# Deploy to server
echo -e "${YELLOW}🚀 Deploying to server...${NC}"
ssh $SSH_HOST << 'EOF'
    # Navigate to website directory
    cd $DEPLOY_PATH
    
    # Pull latest changes
    git pull origin $BRANCH
    
    # Install dependencies
    npm install
    
    # Build the project
    npm run build
    
    # Restart nginx
    sudo systemctl reload nginx
    
    echo "✅ Deployment completed successfully!"
EOF

echo -e "${GREEN}✅ Deployment script completed!${NC}"
