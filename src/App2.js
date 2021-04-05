import './App.css'
import React from 'react'

function App() {
  return (
    <div class="menu">
		<a href="#header">О нас</a>
		<a href="#projects">Проекты</a>
		<a href="#team">Команда</a>
		<a href="#tariffs">Цены</a>
		<a href="#contacts">Контакты</a>
		
	</div>
	<div id="header">
		<h1>Мы запускаем StartUp</h1>
		<p>Здесь будет что-то интересное</p>
		<a href="#">Подробнее</a>
	</div>
	<div class="about-company">
		<h2>О Компании</h2>
		<img src="images/logo.jpg"/>
		<img class="fig">
		<p>	Здесь мог бы быть красивый текст о компании,но выдумывать мне лень. Продукт,суммируя приведенные приеры,переворачивают ребрендинг. Корпоротивная культура индуцирует общественный медийный канал,размещаясь во всех медиа. Побочный PR-эффект экономит жизненный цикл продукции. Молодежная аудитория,не меняя концепции,изложенной выше,актуальна как никогда. Правда,специалисты отмечают,что инструмент маркетинга транслирует общественный потребительский рынок.</p>

		 <p>Стратегия сегментации оправдывает ребрендинг. Рекламная компания,суммируя приведенные примеры,очевидна не для всех. Согласно ставшей уже классической работе Филипа Котлера,искусство медиапланирования изящно специфирует метод изучения рынка. Ребрендинг абстрактен. Конвесия покупателя,следовательно,откровенна.</p>

         <p>К тому же маркетингово-ориентированное издание оправдывет повседневный PR,опираясь на опыт западных коллег. BTL допускает эмпирический сегмент рынка.Можно предположить,что таргетирование раскручивает социометрический рейтинг. Более того,бизнес-модель сознательно отражает имидж предприятия.</p>
		
	</div>
	<div id="team">
		<h2>Команда</h2>
		<p>Не стоит прогибать под изменчивый мир</p>
	
		<div class="teammate">
			<img src="images/member1.jpg"/>
			<h3>Слава Федоров</h3>
			<p class="position">Директор</p>
			<p>Люблю создавать технологичные продукты и выводить их на новые рынки.</p>
			<a href="">Напиши мне</a>
		</div>
		<div class="teammate">
			<img src="images/member2.jpg"/>
			<h3>Яна Мищенко</h3>
			<p class="position">Дизайнер</p>
			<p>Не мыслю своей жизни без дизайна,мне больно,когда я вижу что-то некрасивое.</p>
			<a href="">Напиши мне</a>
		</div>
		<div class="teammate">
			<img src="images/member3.jpg"/>
			<h3>Иннокентий Петрович</h3>
			<p class="position">Директор по безопасности</p>
			<p>Мимо меня и муха не проскочит,не то что хакер по WiFi подключится.</p>
			<a href="">Напиши мне</a>
		</div>
		<div class="teammate">
			<img src="images/member4.jpg"/>
			<h3>Эдуард Долотин</h3>
			<p class="position">Front-end разработчик</p>
			<p>Обожаю front-end разработку и создавать продукты,которыми пользуются люди.</p>
			<a href="">Напиши мне</a>
		</div>
	</div>
		<div id="tariffs">
			<h2>Тарифы</h2>
			<p>Платите нам столько,сколько хотите.Главное платите.</p>
			<ul class="tariff">
				<li class="tariff-name">Базовый</li>
				<li><b>10</b> лайков</li>
				<li><b>10</b> репостов</li>
				<li><b>10</b> комментариев</li>
				<li><b>И еще важный</b> пункт</li>
				<li>
					<p class="price"><b>25 рублей</b></p>
					<p class="period">в день</p>
				</li>
				<li>
					<a href="">Купить</a>
				</li>
			</ul>
			<ul class="tariff">
				<li class="tariff-name pro">Про</li>
				<li><b>20</b> лайков</li>
				<li><b>20</b> репостов</li>
				<li><b>20</b> комментариев</li>
				<li><b>Тоже важный</b> пункт</li>
				<li>
					<p class="price"><b>50 рублей</b></p>
					<p class="period">в день</p>
				</li>
				<li>
					<a href="">Купить</a>
				</li>
			</ul>
			<ul class="tariff">
				<li class="tariff-name">Премиум</li>
				<li><b>50</b> лайков</li>
				<li><b>50</b> репостов</li>
				<li><b>50</b> комментариев</li>
				<li><b>Мега важный</b> пункт</li>
				<li>
					<p class="price"><b>100 рублей</b></p>
					<p class="period">в день</p>
				</li>
				<li>
					<a href="">Купить</a>
				</li>
			</ul>
			
		</div>
		<div id="contacts">
			<h2>Контакты</h2>
			<p>Не будьте скромными,пишите нам:</p>
			 
			<p  class="contact location">Москва,звонят колокола</p>
			<p class="contact phone">Телефон:<a href="">+79956001951</a></p>
			<p class="contact email">Email:<a href="">hello@hwschool.online</a></p>
			<form>
				<input type="text" name="name" placeholder="Имя">
				<input type="text" name="email" placeholder="Email">
				<input type="text" name="name" placeholder="Тема">
				<input type="text" name="name" placeholder="Сообщение">
				<button>Отправить сообщение</button>
			</form>
		</div>

		</div>
		<div class="footer">
			<p>@Все права защищены</p>
		</div>

  )
}

export default App;
