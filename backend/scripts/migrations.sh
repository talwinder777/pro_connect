#!/bin/bash

# Define the path to the virtual environment
VENV_PATH="~/virtualenv"

# Check if the virtual environment exists
if [ ! -d "$VENV_PATH" ]; then
    # Create the virtual environment
    python3 -m venv "$VENV_PATH"
fi

# Activate the virtual environment
source "$VENV_PATH/bin/activate"

# Change directory to your Django project directory
cd /var/www/html/expertFinder_backend

# Install Django (if not already installed)
pip install django
pip install mysqlclient

# Apply Django migrations
python manage.py makemigrations
python manage.py migrate
