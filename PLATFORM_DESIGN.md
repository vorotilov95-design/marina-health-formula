# Design brief for Stitch

Create a mobile-first UI prototype for a private student platform for the wellness/nutrition program “Формула здоровья”.

This is not a public sales website. This is a closed personal account for women who have already purchased the three-month program.

The first prototype must include 5 mobile screens:

1. Login / account activation
2. Welcome after first login
3. Start diagnostics
4. File upload
5. Main student dashboard

## Product Context

The student starts individually after purchase. First, she activates her account, enters the personal cabinet, watches a welcome screen, then completes start diagnostics:

- questionnaire
- lab files
- food diary
- starting measurements
- intro lesson

After these steps, the team prepares her personal program. Until it is ready, the platform should show the status:

Персональная программа готовится

Course materials are opened gradually by the curator/admin. The platform should feel like a calm personal route, not like a messy folder with files.

Main UX feeling:

Я под сопровождением. Всё понятно. Я знаю, что делать сейчас.

## Visual Style

Use the same general feeling as the current “Формула здоровья” landing page:

- premium wellness app
- mobile-first
- clean, warm, expert, soft, minimal
- calm personal route, not an online school dashboard
- not a medical cabinet
- not a cheap file storage page
- not a sales page

Use:

- milk / ivory background
- warm white and beige cards
- graphite text
- olive accent buttons
- soft grey-green status badges
- subtle dusty-pink details for gentle accents
- large rounded cards
- clear mobile hierarchy
- calm icons
- generous spacing

Suggested palette:

- background: #F6F3EC
- card: #FFFFFF
- warm card: #F1EADF
- olive: #5E7446
- olive dark: #3F5630
- olive soft: #EAF0E6
- graphite: #1A1A1A
- muted: #756F67
- grey-green: #DDE7DA
- dusty pink: #D9B8AD
- border: #E5DED3

Typography:

- system sans / SF Pro / Inter style
- large clear headings
- no decorative fonts
- no negative letter spacing
- soft but confident UI text
- very readable on mobile

Avoid:

- public marketing sections
- pricing blocks
- aggressive weight loss visuals
- medical diagnosis language
- dark dashboards
- purple or blue gradients
- messy file folders
- too many dense tables
- visual noise
- gamification that feels childish

## UX Principles

The student should always understand:

- what stage she is in
- what has already been completed
- what needs to be done next
- what the curator/team is preparing
- where her files, lessons, tasks, and personal program live

Use soft Russian copy. Interface text must feel supportive, not strict.

Use clear statuses:

- Не начато
- В процессе
- Выполнено
- Не загружены
- На проверке
- Готовится
- Открыто

Use visual patterns:

- rounded progress cards
- clear checklist items
- soft progress bars
- status badges
- file cards
- calm empty states
- bottom mobile navigation
- floating plus action button on dashboard only

## Screen 1: Login / Account Activation

Purpose: give the student a calm, simple entrance into the personal cabinet.

Main state:

Title:

Войдите в личный кабинет

Subtitle:

Здесь будут ваши уроки, задания, персональная программа, файлы и материалы курса.

Fields:

- Email
- Password

Buttons:

- Войти
- Продолжить через Google
- Активировать кабинет впервые
- Забыли пароль?

Helper text:

Введите email, который вы указывали при покупке курса.

Error states:

- Мы не нашли доступ по этому email. Проверьте адрес или напишите куратору.
- Пароль не подошёл. Попробуйте ещё раз или восстановите доступ.

First activation state:

Title:

Создайте пароль для входа

Text:

Этот пароль понадобится, чтобы возвращаться к урокам, материалам и вашей персональной программе.

Fields:

- New password
- Repeat password

Button:

Создать пароль и войти

Design notes:

- Mobile screen should feel like a calm app login, not a corporate auth form.
- Use one warm card over an ivory background.
- Add a small soft brand mark or text “Формула здоровья”.
- Make the Google button secondary, not dominant.

## Screen 2: Welcome Screen

Purpose: explain the first route after purchase and reduce anxiety.

Title:

Добро пожаловать в «Формулу здоровья»

Text:

Это ваш личный кабинет на время курса. Здесь будут открываться уроки, задания, материалы, ваши файлы и персональная программа.

Section title:

Сначала мы соберём вашу точку старта

Text:

Перед началом программы важно заполнить анкету, загрузить анализы, внести замеры и начать дневник питания. На основе этих данных команда подготовит для вас индивидуальный маршрут.

Show 4 process cards:

1. Диагностика  
   Вы заполните анкету, загрузите анализы, дневник питания и стартовые замеры.

2. Персональная программа  
   Команда изучит ваши данные и подготовит персональные фокусы для старта.

3. Еженедельные материалы  
   Каждую неделю вам будет открываться новый блок курса: уроки, гайды, задания и чек-листы.

4. Поддержка  
   Куратор поможет с заданиями, тарелками, дневником питания и вопросами по курсу. Живое общение остаётся в Telegram.

Main button:

Начать диагностику

Secondary button:

Посмотреть, как устроен курс

Design notes:

- Use a vertical mobile route/timeline.
- Add gentle numbered cards or icon cards.
- The primary CTA should be obvious.
- Keep text short and airy.

## Screen 3: Start Diagnostics

Purpose: show what must be completed before the personal program is prepared.

Title:

Стартовая диагностика

Subtitle:

Заполните базовые данные, чтобы команда могла подготовить ваш индивидуальный маршрут на курсе.

Main status card:

Персональная программа готовится

Text:

Сейчас нам нужны ваши данные: анкета, анализы, дневник питания и стартовые замеры. После этого команда подготовит персональные фокусы.

Progress:

0 из 5 шагов выполнено

Add a progress bar.

Checklist cards:

1. Заполнить анкету  
   Расскажите о целях, питании, режиме, самочувствии, ЖКТ, сне, активности и ограничениях.  
   Status: Не начато  
   Button: Заполнить анкету

2. Загрузить анализы  
   Загрузите анализы, которые у вас уже есть. Если вы ещё не сдавали анализы, можно вернуться к этому шагу позже.  
   Status: Не загружены  
   Button: Загрузить файлы

3. Начать дневник питания  
   Ведите дневник питания 3–5 дней. Это поможет увидеть реальную картину: приёмы пищи, голод, насыщение, реакции ЖКТ и самочувствие.  
   Status: Не начат  
   Button: Открыть дневник

4. Внести стартовые замеры  
   Добавьте вес и основные замеры. Это нужно не для давления цифрами, а для наблюдения динамики.  
   Status: Не внесены  
   Button: Внести замеры

5. Посмотреть вводный урок  
   Марина расскажет, как будет проходить курс, что важно сделать на старте и как не перегрузить себя информацией.  
   Status: Не просмотрен  
   Button: Смотреть урок

Support block:

Title:

Если что-то непонятно

Text:

Вы можете задать вопрос куратору в Telegram. Платформа хранит материалы и файлы, а живое общение остаётся в чате.

Button:

Написать куратору

Design notes:

- Checklist cards must look clearly actionable.
- Status badges should be visible but soft.
- Progress bar should be calm, not game-like.
- The student should immediately know the next step.

## Screen 4: File Upload

Purpose: let the student upload documents and understand what happens next.

Title:

Загрузка файлов

Subtitle:

Добавьте файлы, которые помогут команде подготовить вашу персональную программу.

Helper card:

Подойдут PDF, фото или скриншоты. Главное, чтобы текст и значения были хорошо видны.

Small note:

Если вы ещё не сдавали анализы, этот шаг можно выполнить позже.

Category selector:

Что вы загружаете?

Options:

- Анализы
- Дневник питания
- Фото тарелок
- Замеры
- Медицинские документы
- Другое

Upload area:

Нажмите, чтобы выбрать файл  
или перетащите файл сюда  
PDF, JPG, PNG, DOCX, XLSX

Comment field:

Label:

Комментарий к файлу

Placeholder:

Например: Анализы от 12 марта, Дневник питания за 3 дня, Фото тарелок за неделю.

Button:

Загрузить файл

Success state:

Title:

Файл загружен

Text:

Куратор увидит файл в вашей карточке. Если понадобятся уточнения, вам напишут.

Buttons:

- Загрузить ещё файл
- Вернуться к диагностике

Uploaded files section:

Title:

Ваши файлы

Example file card:

- Анализы_март.pdf
- Category: Анализы
- Date: 12 марта
- Status: На проверке
- Comment: Анализы после консультации

Design notes:

- Upload area should be large and calm.
- Category selector can be segmented chips.
- File cards should look organized and trustworthy.
- Avoid heavy medical styling.

## Screen 5: Main Student Dashboard

Purpose: the student opens the app and instantly understands her current stage and next action.

Create two dashboard states in the same design system.

### State A: Preparation Stage

Greeting:

Мария, добро пожаловать в курс

Status:

Подготовительный этап

Main card:

Title:

Сейчас собираем данные для вашей программы

Text:

Заполните анкету, загрузите анализы, начните дневник питания и внесите стартовые замеры. После этого команда подготовит персональные фокусы.

Progress:

2 из 5 шагов выполнено

Add progress bar.

Button:

Продолжить диагностику

Checklist:

- Заполнить анкету — выполнено
- Загрузить анализы — не загружены
- Начать дневник питания — в процессе
- Внести стартовые замеры — не внесены
- Посмотреть вводный урок — выполнено

Program card:

Title:

Моя программа

Status:

Готовится

Text:

Персональная программа появится здесь после проверки данных командой.

Button:

Открыть раздел

Quick actions:

- Загрузить файл
- Открыть дневник
- Внести замеры
- Написать куратору

### State B: Week 1 Opened

Greeting:

Мария, у вас открыта 1 неделя

Status:

Неделя 1 из 12

Main week card:

Title:

Фокус недели: старт питания без хаоса

Text:

На этой неделе вы начнёте собирать сбалансированные тарелки, смотреть на белок, клетчатку, воду и ритм питания без жёстких ограничений.

Status:

В процессе

Button:

Открыть неделю

Weekly tasks:

- Посмотреть урок «Здоровая тарелка»
- Скачать гайд по белкам, жирам, углеводам и клетчатке
- Собрать 1–2 тарелки
- Отправить фото куратору
- Заполнить дневник питания
- Написать короткую рефлексию недели

Progress cards:

- Уроки — 1 из 3
- Задания — 0 из 4
- Файлы — 2 загружено
- Следующий шаг — Отправить фото тарелки

Reminders:

- Вы ещё не загрузили анализы
- Не забудьте внести вес и замеры на этой неделе
- Следующая неделя откроется после завершения текущего блока

Bottom mobile navigation:

- Главная
- Курс
- Файлы
- Программа
- Профиль

Floating plus button actions:

- Загрузить анализы
- Добавить фото тарелки
- Заполнить дневник
- Внести замеры

Design notes:

- Bottom navigation should feel native and clear.
- Floating plus button should not cover important content.
- State A should feel like onboarding/preparation.
- State B should feel like an active weekly course.
- The dashboard must not feel like a sales page.

## Component System

Use these components across the prototype:

- app header with greeting/status
- large rounded status card
- checklist item card
- progress bar
- soft status badge
- primary olive button
- secondary light button
- segmented category chips
- upload dropzone
- file card
- task list item
- bottom mobile navigation
- floating plus action button

Button style:

- primary: olive background, white text
- secondary: soft green or warm beige background, olive/dark text
- disabled: low contrast warm grey

Card style:

- rounded corners
- warm white or beige
- subtle border
- soft shadow only if needed
- no nested-card clutter

Icon style:

- calm line icons
- no cartoon style
- no aggressive fitness icons
- use simple symbols for file, check, clock, chat, plate, lesson, upload

## Final Requirement

Make the UI beautiful, premium, soft, and easy to understand.

The student should immediately understand what to do next.

The design should communicate:

- everything is guided
- the student is not alone
- the program is personal
- materials open gradually
- the platform stores lessons, tasks, files, and the personal program
- live communication remains in Telegram
