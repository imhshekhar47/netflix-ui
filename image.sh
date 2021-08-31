#!/bin/bash

DOCKER_USERNAME=imhshekhar47
DOCKER_IMAGE_NAME=netflix-ui
DOCKER_IMAGE_TAG=

ask_version() {
   read -p "Please provice a version name (example v1.0.0):" DOCKER_IMAGE_TAG
}

list_image() {
   cmd="docker image ls -${DOCKER_USERNAME}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} ."
    echo "Running > ${cmd}" && \
        eval "${cmd}" 
}

build_image()  {
    if [[ -z "${DOCKER_IMAGE_TAG}" ]]; then
        ask_version
    fi

    if [[ -z "${DOCKER_IMAGE_TAG}" ]]; then
        echo "Error: Image Tag can not be Empty"
        exit 1
    fi

    cmd="docker build -t ${DOCKER_USERNAME}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} ."
    echo "Running > ${cmd}" && \
        eval "${cmd}"
}

push_image() {
    if [[ -z "${DOCKER_IMAGE_TAG}" ]]; then
        ask_version
    fi
    cmd="docker push ${DOCKER_USERNAME}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
    echo "Running > ${cmd}" && \
        eval $cmd
}

usage() {
    echo "./images.sh [build|push]"
}

if [[ $# -lt 1 ]]; then
    echo "Argument missing"
    usage
    exit 1
fi


ACTION=${1}

echo "./image.sh ${ACTION}"

case ${ACTION} in
    "build")
        build_image
        ;;
    "push")
        push_image
        ;;
    *)
        echo "Invalid arguments"
        usage
        exit 1
        ;;
esac

exit $?



