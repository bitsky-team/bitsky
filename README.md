<p align='center'>
  <img src="https://i.imgur.com/Pt1nmqh.png" width="256">
</p>

# Bitsky
A new way to share with your loved ones.

[![Build Status](https://travis-ci.com/bitsky-team/bitsky.svg?branch=develop)](https://travis-ci.com/bitsky-team/bitsky)
![Version badge](https://img.shields.io/github/manifest-json/v/bitsky-team/bitsky/develop.svg?label=version)
![Issues badge](https://img.shields.io/github/issues/bitsky-team/bitsky.svg)
![License badge](https://img.shields.io/github/license/bitsky-team/bitsky.svg)

📌 Table of contents
=================
* [Introduction](#-introduction)
* [Why](#-why)
* [Project structure](#-project-structure)
* [How do I get started?](#-how-do-i-get-started)
* [Contributing](#-contributing)
* [Discord](#-discord)

☁️ Introduction
==========================
**Founders**: Bitsky is a private community and social cloud.  
**You**: Excuse me, what the fuck?  
**Founders**: Let’s take a closer look at the meaning of these words.
 - The term *private* means that it belongs to a user or to a group of users.
 - The term *social* means that it contains the functionalities of a social network.
 - The term *community* means that you can link it to other Bitsky in order to create a broader network.

But not only that, it can also be used as a private or shared storage space.

The goal is to create a private and wireless sharing space between different groups of users wishing to communicate together using a simple and intuitive human-machine interface.

Each device will be able to link to other devices through key sharing.

![key sharing example](https://i.imgur.com/X9kRb3v.png)

The device on the left will be able to read and, if necessary, display the data from the device on the right and vice versa. A link is only by direct link and therefore is not transitive.

🤔 Why?
===========================
Privacy.

A virtual identity card, social networks alter our society by their influence. We allow them, often without our knowledge, to achieve their economic or political ends.

One of the most recent examples of privacy breaches is the Cambridge Analytica scandal, which took advantage of the lax social network Facebook to influence political outcomes.

The indignation and distrust of Internet users has only grown. The use and control of their data has become their concern.

This project will try to address that and address those concerns.

🛠️ Project structure
=================
```bash
├── src
│   ├── intermediary-api # Security REST api cloud-hosted
│   ├── api # Embedded Rest API hosted on a nano computer (using intermediary-api for links)
│   ├── desktop # Desktop app (using api)
│   ├── mobile # Mobile app (usi api)
│   └── configuration # Device configuration interfaces
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── CONTRIBUTORS.md
├── LICENSE.md
├── README.md
├── manifest.json
├── docs
│   └── BRANCHING_MODEL.md
└── .github
```

📟 How do I get started?
=====================
If you want to use it: actually you can't, we are bootstrapping the project.
But if you want to get an overview of the current work here are the steps to follow:

## Tools

- yarn@1.22.10
- node@15.6.0
- postgreSQL@12.1

## Base installation
- Install the main dependencies
  ```bash
  cd bitsky
  yarn install
  ```

- Install & launch [API](https://github.com/bitsky-team/bitsky/tree/develop/projects/api)

- Install & launch [Desktop app](https://github.com/bitsky-team/bitsky/tree/develop/projects/desktop)


🤝 Contributing
================
If you want to contribute:
 1. Read the [contributing.md file](CONTRIBUTING.md).
 2. Check the [project board](https://github.com/bitsky-team/bitsky/projects) and find an issue who suits you.
 3. Respect the pull request template.
 4. Add your name in the [contributors.md file](CONTRIBUTORS.md).
 5. Thanks !

💌 Discord
===========
If you have any suggestions or would like to contribute or just chat, please feel free to come to our [Discord server](https://discord.gg/nNmB7Sz).
