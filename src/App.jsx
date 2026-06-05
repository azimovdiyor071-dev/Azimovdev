import { useState } from 'react'

const advantages = [
  {
    title: 'Ваши переплаты можно законно вернуть',
    text: 'Проверим договоры, проценты и штрафы, чтобы найти законные варианты защиты.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Подготовим документы без сложных терминов',
    text: 'Соберем пакет документов и объясним каждый этап простым языком.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Будете спать спокойно и сможете уверенно двигаться дальше',
    text: 'Поможем снизить давление звонков, писем и непонятных требований.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
  },
]

const contacts = ['Telegram', 'WhatsApp', 'Почта', 'Карта']

const stats = [
  ['7+', 'лет практики'],
  ['2 400+', 'дел разобрано'],
  ['0 ₽', 'первая консультация'],
]

function stopSubmit(event) {
  event.preventDefault()
}

function App() {
  const [isNight, setIsNight] = useState(false)

  return (
    <main className={`page ${isNight ? 'night' : ''}`}>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="долги">
          Лого
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#benefits">Преимущества</a>
          <a href="#form">Анкета</a>
          <a href="#offer">Списание</a>
          <a href="#expert">Контакты</a>
        </nav>
        <a className="header-phone" href="tel:+78000000000">
          +8 (800) 555-35-35
        </a>
        <a className="header-cta" href="#form">
          Получить помощь
        </a>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setIsNight((current) => !current)}
          aria-label={isNight ? 'Включить светлый режим' : 'Включить ночной режим'}
        >
          <span>{isNight ? '☀' : '☾'}</span>
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">Юридическая помощь по долгам</p>
          <h1>Законно спишем Ваши долги</h1>
          <p className="hero-text">
            Поможем пройти процедуру банкротства физического лица и снизить
            долговую нагрузку без лишней паники.
          </p>
          <a className="primary-btn" href="#form">
            Получить консультацию
          </a>
          <dl className="hero-stats">
            {stats.map(([value, label]) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <a className="scroll-cue" href="#benefits" aria-label="Перейти ниже">
          ↓
        </a>
      </section>

      <section className="benefits" id="benefits">
        <p className="section-kicker">Преимущества</p>
        <h2>Три больших преимущества</h2>
        <p className="section-subtitle">
          Работаем аккуратно, прозрачно и сопровождаем каждый шаг.
        </p>

        <div className="benefit-grid">
          {advantages.map((item) => (
            <article className="benefit-card" key={item.title}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="form-section" id="form">
        <form className="debt-form" onSubmit={stopSubmit}>
          <h2>Начните списание долгов прямо сейчас</h2>
          <p>Оставьте контакты, и юрист оценит вашу ситуацию за 15 минут.</p>
          <label>
            Ваше имя
            <input type="text" placeholder="Иван Иванов" />
          </label>
          <label>
            Телефон
            <input type="tel" placeholder="+7 (___) ___-__-__" />
          </label>
          <label>
            Сумма долга
            <input type="text" placeholder="Например, 450 000 ₽" />
          </label>
          <label>
            Город
            <input type="text" placeholder="Москва" />
          </label>
          <label className="checkbox-row">
            <input type="checkbox" defaultChecked />
            <span>Принимаю условия обработки персональных данных</span>
          </label>
          <button type="submit">Оставить заявку</button>
          <small>Нажимая кнопку, вы не берете на себя никаких обязательств.</small>
        </form>
      </section>

      <section className="offer" id="offer">
        <div className="offer-copy">
          <p className="eyebrow">Акция</p>
          <h2>Специальное предложение</h2>
          <p>
            Получите бесплатный первичный разбор ситуации и понятный план
            действий уже сегодня.
          </p>
        </div>
        <form className="offer-form" onSubmit={stopSubmit}>
          <h3>Получите чек-лист из 10 ошибок, которые мешают списать долги</h3>
          <p>PDF придет в удобный мессенджер после короткой заявки.</p>
          <input type="text" placeholder="Ваше имя" />
          <input type="tel" placeholder="Ваш телефон" />
          <button type="submit">Получить</button>
        </form>
      </section>

      <section className="article">
        <div className="article-copy">
          <p className="section-kicker">Главное</p>
          <h2>Почему вам стоит начать банкротство</h2>
          <p>
            Если платежи больше не помещаются в бюджет, важно не ждать, пока
            штрафы и проценты станут еще выше. Законная процедура помогает
            остановить давление кредиторов и зафиксировать понятный маршрут.
          </p>
          <a className="secondary-btn" href="#form">
            Узнать подробнее
          </a>
        </div>
        <div className="article-images" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"
            alt=""
          />
        </div>
      </section>

      <section className="expert" id="expert">
        <div className="expert-copy">
          <h2>Яков Кошерный</h2>
          <p>
            Руководитель практики по банкротству физических лиц. Помогает
            клиентам разобраться с долгами, коллекторами и судебными
            производствами.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="socials" aria-label="Контакты">
          {contacts.map((contact) => (
            <a href="#top" key={contact} aria-label={contact}>
              {contact.slice(0, 1)}
            </a>
          ))}
        </div>
        <nav className="footer-nav" aria-label="Дополнительная навигация">
          {contacts.map((contact) => (
            <a href="#top" key={contact}>
              {contact}
            </a>
          ))}
        </nav>
        <p>© 2026 Все права защищены</p>
      </footer>
    </main>
  )
}

export default App
