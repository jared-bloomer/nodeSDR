#!/usr/bin/env bash

packages="librtlsdr-dev librtlsdr0 libusb-1.0-0-dev libusb-1.0-doc"

if "$UID" != "0"; then
	echo "ERROR: You must be root or use sudo to run this script!"
	exit 1
else
	main
fi

main () {
	apt update
	apt install -y $packages

	exit 0
}
