# Формула здоровья — frontend prototype

Кликабельный React-прототип личного кабинета ученицы курса «Формула здоровья».

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

После запуска Vite покажет локальный адрес, обычно `http://localhost:5173/`.

## Реализованные экраны

- LoginScreen — вход и активация кабинета.
- WelcomeScreen — приветствие после первого входа.
- DiagnosticsScreen — стартовая диагностика.
- FileUploadScreen — demo-загрузка файлов и success state.
- DashboardScreen — главный экран подготовительного этапа.
- Placeholder-экраны для разделов «Курс», «Программа», «Профиль».

## Важно

Это frontend prototype без backend:

- нет настоящей авторизации;
- нет базы данных;
- нет реальной загрузки файлов;
- все данные mock/demo;
- кнопка «Написать куратору» открывает demo-модальное окно.

Дизайн перенесён из Stitch-кода с сохранением токенов Tailwind, Inter, Material Symbols, цветов, карточек, статусов и mobile-first layout.
