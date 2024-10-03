# Это пустой проект

## С чего начать?

Склонируй репозиторий себе в папку, удали все файлы и начни устанавливать нужный фреймворк

## Vite React TypeScript

https://vite.dev/guide/

```bash
npm create vite@latest . -- --template react-ts
```

# Biome

По умолчанию Vite, Next и многие другие фреймворки используют ESLint по умолчанию. Это отличный инструмент, которым все пользуются, но у него есть пара недостатков:

- Он написан на JS, а это однопоточный язык с огромным оверхедом по производительности
- Атомарная архитектура, каждая фича подключается в виде плагина отдельным пакетом, за которым нужно следить и обновлять, и не дай бог появится какая-то несовместимость
- Форматтер **ВСЕГДА** нужно подключать отдельно (Prettier) и он почему-то не входит в базовый набор шаблонов
- Нужно так же следить, чтобы версия линтера поддерживалась преттиром 🤯🤡

В противовес ему появился Biome, который:

- Написан на Rust (все модные инструменты пишут на Rust)
- Работает в ~10 раз быстрее
- Имеет монолитную архитектуру, всё из коробки в одном пакете
- Форматтер уже в комплекте. Буквально всё в одном.

Подробнее: https://biomejs.dev/
