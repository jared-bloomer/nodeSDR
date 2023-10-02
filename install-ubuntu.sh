#!/usr/bin/env bash

packages="librtlsdr-dev librtlsdr0 libusb-1.0-0-dev libusb-1.0-doc git wget tar"

installNVM () {
	echo "Install Node Version Manager (nvm)"
	wget https://github.com/nvm-sh/nvm/archive/refs/tags/v0.39.5.tar.gz
	tar xf v0.39.5.tar.gz
	cd nvm-0.39.5
	bash install.sh
	cd ..
}

main () {
	apt update
	apt install -y $packages
	installNVM
	cd server
	echo "Installing Node v18.18.0"
	nvm install v18.18.0
	echo "Install nodejs packages needed for server"
	npm i
	echo "Setting up Server Database"
	npm exec knex init
	npm exec knex migrate:up
	
	exit 0
}

if [ $UID -ne 0 ]; then
	echo "ERROR: You must be root or use sudo to run this script!"
	exit 1
else
	main
fi

