# CMS для приложения Красная книга Москвы

## Описание

В этом репозитории находится код [StrAPI CMS](https://strapi.io) настроенный для работы с приложением [Красная книга (frontend)](https://github.com/lynx-r/gc-hackathon-redbook-frontend.git)

## Подготовка к запуска

Для запуска приложения нужно выполнить клон двух репозиториев:

[Красная книга (frontend)](https://github.com/lynx-r/gc-hackathon-redbook-frontend.git)

```bash
git clone https://github.com/lynx-r/gc-hackathon-redbook-frontend.git
```

[Красная книга (CMS)](https://github.com/lynx-r/gc-hackathon-redbook-cms)

```bash
git clone https://github.com/lynx-r/gc-hackathon-redbook-cms.git
```

После клонирования репозиториев нужно перейти в репозиторий [Красная книга (CMS)](https://github.com/lynx-r/gc-hackathon-redbook-cms)

```bash
cd gc-hackathon-redbook-cms
```

## Переменные окружения

Для корректной работы приложения нужно создать файл `.env` в `gc-hackathon-redbook-cms`

Самый простой способ, скопировать из .env.example

```bash
cp .env.example .env
```

## Запуск в Docker

Для запуска в [Docker](https://www.docker.com/) нужно установить [Docker compose](https://docs.docker.com/compose/) и выполнить команду

```bash
docker-compose up -d
```

Либо аналог команды в вашей ОС.

## Добавление новых животных

Для добавления новых животных в CMS перейдите по адресу [http://localhost:1337/admin](http://localhost:1337/admin) и зарегистрируйтесь либо войдите в систему.

На вкладке [Content Manager] выберите [Животные](http://localhost:1337/admin/content-manager/collection-types/api::animal.animal?page=1&pageSize=10&sort=name:ASC), добавьте и опубликуйте новую запись.

Для доступа к разделу Животные перейдите в [Settings](http://localhost:1337/admin/settings/application-infos) -> [Roles](http://localhost:1337/admin/settings/users-permissions/roles) -> [Public](http://localhost:1337/admin/settings/users-permissions/roles/2), в блоке Permissions выберите Animals и выберите все права (`create, delete, find, findOne, update`). Это нужно для работы демо версии мобильного приложения.

Коротко ознакомиться с работой с структурами данных CMS можно [здесь](https://docs.strapi.io/dev-docs/quick-start#-part-b-build-your-data-structure-with-the-content-type-builder). С добавлением контента [здесь](https://docs.strapi.io/dev-docs/quick-start#-part-d-add-content-to-your-strapi-cloud-project-with-the-content-manager).

## Web приложения

После запуска системы в докере, веб приложение должно быть доступно по адресу [http://localhost:8081/](http://localhost:8081/)

## База данных CMS

База данных CMS доступна по адресу [http://localhost:9090](http://localhost:9090)

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

t
