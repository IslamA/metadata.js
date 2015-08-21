/**
 * Основное окно интерфейса unf demo
 *
 * Created 17.06.2015<br />
 * &copy; http://www.oknosoft.ru 2014-2015
 * @author	Evgeniy Malyarov
 *
 * @module  main
 */

/**
 * Глобальная переменная демки УНФ (не фреймворка _metadata.js_, а конкретного прикладного решения)<br />
 * в её свойстве _modifiers_ располагаем модификаторы объектов, подписки на события и прочую бизнес-логику,
 * которая должна обрабатываться на клиенте
 * @type {UNF}
 */
var unf = new function UNF() {
	this.modifiers = [];
};

/**
 * Процедура устанавливает параметры работы программы, специфичные для текущей сборки
 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
 * @param modifiers {Array} - сюда можно добавить обработчики, переопределяющие функциональность объектов данных
 */
$p.settings = function (prm, modifiers) {

	// для транспорта используем rest, а не сервис http
	prm.rest = true;

	// расположение rest-сервиса unf
	prm.rest_path = "/a/unf/%1/odata/standard.odata/";

	// по умолчанию, обращаемся к зоне 1377
	prm.zone = 1377;

	// расположение файлов данных
	prm.data_url = "examples/unf/data/";

	// расположение файла инициализации базы sql
	prm.create_tables = "examples/unf/data/create_tables.sql";

	// расположение страницы настроек
	prm.settings_url = "examples/unf/settings.html";

	// разрешаем сообщения от других окон
	prm.allow_post_message = "*";

	// используем русскоязычные синонимы классов и методов
	prm.russian_names = true;

	// разрешаем покидать страницу без лишних вопросов
	$p.eve.redirect = true;

	// подключаем модификаторы
	unf.modifiers.forEach(function (func) {
		modifiers.push(func);
	});
};


/**
 * Обработчик события при начале работы программы
 */
$p.iface.oninit = function() {

	/**
	 * Т.к. демо-примеры УНФ, безбумажки и бухгалтерии развёрнуты на одном домене, они получают общее локальное хранилище
	 * чтобы не возник конфликт настроек при переключении между демо-примерами, принудительно перечитываем настройки по умолчанию
	 */
	if(location.host.indexOf("oknosoft.ru") != -1){
		var prm = {};
		$p.settings(prm, []);
		for(var i in prm)
			$p.wsql.set_user_param(i, prm[i]);
	}

	/**
	 * Используем разбивку экрана в две колонки: дерево навигации слева, динсписок в центре
	 */
	$p.iface.layout_2u()

		.then(function (tree) {

			/**
			 * Используем стандартную процедуру аутентификации.
			 * При необходимости, можно реализовать клиентские сертификаты, двухфакторную авторизацию с одноразовыми sms и т.д.
			 */
			$p.iface.frm_auth(

				/**
				 * Используем стандартную визуализацию входа в программу.
				 * При необходимости, можно показать свои диалоги, оповещения, рекламу и т.д.
				 */
				null,

				/**
				 *  открываем окно "все функции" с деревом метаданных
				 *  это место можно переопределить и открывать, например, специальную форму списка заказов
				 */
				function () {
					$p.iface.set_hash("doc.ЗаказПокупателя", "", "", "oper");
					setTimeout(function () {
						$p.iface.tree.closeItem("oper_cat");
					}, 500);

				},

				/**
				 * в случае ошибки входа в программу, просто пишем информацию в лог
				 * здесь можно реализовать некий алгоритм recovery - подключиться к резервному серверу, перейти в автономный режим и т.д.
				 */
				function (err) {
					var emsg = err.message.toLowerCase();
					if(emsg.indexOf("not found")!=-1)
						$p.msg.show_msg({
							type: "alert-error",
							text: "Проверьте строку подключения к 1С<br /> и номер зоны публикации 1С",
							title: "Сервис 1с-rest не найден"});

					console.log(err);
				}
			);
		}

	);
};

/**
 * Обработчик события перед маршрутизацией
 * @param event
 * @return {boolean}
 */
$p.iface.before_route = function (event) {
	var route_prm = $p.job_prm.parse_url();
	if(route_prm.view && route_prm.view!="oper"){
		setTimeout(function () {
			$p.iface.set_hash("", "", "", "oper");
		}, 0);
		return false;
	}
};


