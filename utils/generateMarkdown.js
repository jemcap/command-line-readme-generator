// variables to store the badges of the licenses to display near the top of the page
const licenseBadges = {
  "MIT License": "https://img.shields.io/badge/license-MIT-green",
  "GNU GPLv3": "https://img.shields.io/badge/license-GPLv3-blue",
  "Apache License 2.0": "https://img.shields.io/badge/license-Apache%202.0-red",
  // add more licenses as needed
};

// function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = licenseBadges[data.license];
  const licenseNotice = `${data.title} is covered under ${data.license}.`

  return `
# <h1 align="center">**✨ ${data.title} ✨**</h1>

![License](${licenseBadge})

<hr/>
<hr/>

## 📝 **Description**
${data.description}

<hr/>

## **Demo**
![Demo](${data.demo})

<hr/>

## 🗂️ **Table of Contents**
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

<hr/>

## 💻 **Installation** <a name="#installation"></a>
${data.installation}

<hr/>

## 🚀 **Usage** <a name="#usage"></a>
${data.usage}

<hr/>

## 🪪 **License** <a name="#license"></a>
![License](${licenseBadge}) — (${licenseNotice})

<hr/>

## 🤝 **Contributing** <a name="#contributing"></a>
${data.contributing}

<hr/>

## 🛠️ **Tests** <a name="#tests"></a>
${data.tests}

<hr/>

## ❔ **Questions** <a name="questions"></a>
Any queries about this project, please feel welcome to reach out to me using the following credentials:
<h3>${data.name}</h3>
- Github: <a href="${data.github}">${data.name}</a>
<br />
- Email: <a href="mailto:${data.email}">${data.email}</a>


`;
}

module.exports = generateMarkdown;
