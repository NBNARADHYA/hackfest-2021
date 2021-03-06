# Covid Vaccine Distribution System

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Project presentation and Live Demo

It can be viewed on YouTube [HERE](https://youtu.be/z92IZQF5epA)

## Contributing Guidelines

1. This repository consists of 3 services namely `web`, `server` and `model`.
2. So, commit code to the corresponding services.

### Setting up the repository locally

1. Fork the repo to your account.

2. Clone your forked repo to your local machine:

```
git clone https://github.com/NBNARADHYA/hackfest-2021.git (https)
```

or

```
git clone git@github.com:NBNARADHYA/hackfest-2021.git (ssh)
```

This will make a copy of the code to your local machine.

3. Change directory to `hackfest-2021`.

```
cd hackfest-2021
```

4. Check the remote of your local repo by:

```
git remote -v
```

It should output the following:

```
origin	https://github.com/<username>/hackfest-2021.git (fetch)
origin	https://github.com/<username>/hackfest-2021.git (push)
```

or

```
origin	git@github.com:<username>/hackfest-2021.git (fetch)
origin	git@github.com:<username>/hackfest-2021.git (push)
```

Add upstream to remote:

```
git remote add upstream https://github.com/NBNARADHYA/hackfest-2021.git (https)
```

or

```
git remote add upstream git@github.com:NBNARADHYA/hackfest-2021.git (ssh)
```

Running `git remote -v` should then print the following:

```
origin	https://github.com/<username>/hackfest-2021.git (fetch)
origin	https://github.com/<username>/hackfest-2021.git (push)
upstream	https://github.com/NBNARADHYA/hackfest-2021.git (fetch)
upstream	https://github.com/NBNARADHYA/hackfest-2021.git (push)
```

or

```
origin	git@github.com:<username>/hackfest-2021.git (fetch)
origin	git@github.com:<username>/hackfest-2021.git (push)
upstream	git@github.com:NBNARADHYA/hackfest-2021.git (fetch)
upstream	git@github.com:NBNARADHYA/hackfest-2021.git (push)
```

## Dev Setup

### Method 1 (recommended): using Docker

#### Pre-requisites

1. Install `Docker` by looking up the [docs](https://docs.docker.com/get-docker/)
2. Install `Docker Compose` by looking up the [docs](https://docs.docker.com/compose/install/)

#### Steps

1. Make sure you are in the root of the project (i.e., `./hackfest-2021/` folder).
2. Setup environement variables in `.env` files of all `services` and `root` according to `.example.env` files.
3. Run `docker-compose up` to spin up the containers.
4. The website would then be available locally at `http://localhost:WEB_PORT/`. (`WEB_PORT` in `.env`)
5. The above command could be run in detached mode with `-d` flag as `docker-compose up -d`.
6. For help, run the command `docker-compose -h`.

### Method 2 (not recommended): Setup `services` independently

#### Setup `server`

##### Pre-requisites

1. Install `postgresql` by looking up the following docs ([debian based linux](https://www.postgresql.org/download/linux/debian/), [mac os](https://www.postgresql.org/download/macosx/) and [windows](https://www.postgresql.org/download/windows/))
2. Create a new user by running `createuser -U postgres -P techathon `
3. Create a new database by running `createdb -U postgres -O techathon techathon`

##### Steps

1. Run `cd services/server`
2. Setup environmental variables according to `.example.env`
3. Run `yarn install`
4. Run `yarn run dev` to start the server

#### Setup `web`

##### Steps

1. Run `cd services/web`
2. Setup environmental variables according to `.example.env`
3. Run `yarn install`
4. Run `yarn start` to start the server

#### Setup `model`

##### Pre-requisites

1. Install `python3` on your device if not already by looking up the following docs([windows](https://www.python.org/downloads/windows/), [mac](https://www.python.org/downloads/mac-osx/), `ubuntu` comes pre-installed)
2. Install `virtualenv` if not already by running `pip3 install virtualenv`

##### Steps

1. Run `cd services/model`
2. Run `python3 -m venv venv` to create a virtual environment
3. Activate `venv` by running `. venv/bin/activate`
4. Run `pip3 install -r requirements.txt` to install packages
