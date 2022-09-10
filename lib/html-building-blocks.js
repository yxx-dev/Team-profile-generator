function buildHtml (manager, engineer, intern) {
    //html building blocks
    let builtHtml;
    let managerCard;
    let engineerCards;
    let internCards;

    managerCard = `
        <article  class="card m-1" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <p class="card-text">Manager</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${manager.employeeId}</li>
            <li class="list-group-item">Email: <a href="mailto: ${manager.email}" class="card-link">${manager.email}</a></li>
            <li class="list-group-item">Office #: ${manager.officeNumber}</li>
            </ul>
        </article>
    `
    engineer.forEach(record => {
        engineerCards += `
        <article  class="card m-1" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${record.name}</h5>
              <p class="card-text">Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${record.employeeId}</li>
              <li class="list-group-item">Email: <a href="mailto: ${record.email}" class="card-link">${record.email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${record.githubUsername}" target="_blank" class="card-link">${record.githubUsername}</a></li>
            </ul>
        </article>

        `
    })

    intern.forEach(record => {
        internCards += `
        <article  class="card m-1" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${record.name}</h5>
              <p class="card-text">Intern</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${record.employeeId}</li>
              <li class="list-group-item">Email: <a href="mailto: ${record.email}" class="card-link">${record.email}</a></li>
              <li class="list-group-item">School: ${record.school}</li>
            </ul>
        </article>
        
        `
    })

    builtHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="container text-center">
            <h2>My Team</h2>
        </header>
        <main class="container text-center">
            <section class="row">
            ${managerCard}
            ${engineerCards}
            ${internCards}
            </section>
        </main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    </body>
    </html>
    `
    return builtHtml;
}



