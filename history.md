# v0.9.199

### 01.10.2015
- Пример подключения ServiceWorker для тонкого управления кешированием
 
### 05.10.2015
- Добавлен журнал регистрации системных и пользовательских событий

### 24.10.2015
- Дерево динамического списка оформлено в виде компонента (раньше был плоский код в автоформе)
- Библиотека dhtmlx обновлена до v4.5 - задействовано gpl-ядро + модификаторы и расширения
- Новое свойство _device_type_ (phone, tablet, desktop) и событие _on_rotate_ 

### 25.10.2015
- Новый визуальный компонент - DynDataView

### 27.10.2015
- Добавлен _midi beeper_ для звукового сопровождения сканирования (пример в безбумажке)
- Дополнены методы WSQL для работы с indexedDB
- Реализована запись оффлайн и синхронизация с 1С для регистратора штрихкодов (пример в безбумажке)
- Драйвер клавиатурного сканера оформлен в виде компонента (раньше был плоский код в модуле безбумажки)

### 28.10.2015
- Добавлены префиксы локального хранилища. Нужны, когда несколько сйтов крутятся на одном домене и отличаются только папками
- Новое событие _on_grid_inited_ в автоформе списка и выбора
- Новый тип поля грида - _pwd_ для ввода паролей

### 30.10.2015
- Пример фоновой синхронизации в отдельном потоке (WebWorker в безбумажке)
- Обновлена документация по API

# v0.9.200

### 06.11.2015
- Дерево _ODynTree_ теперь может содержать не только папки, но и входящие в эти папки элементы

### 10.11.2015
- Поддержана возможность переключения скинов (тем оформления)
 
### 14.11.2015
- Новый визуальный компонент - ODropdownList - гиперссылка с выпадающим списком
- Задействован иконошрифт fontawesome
- Сторонние библиотеки теперь загружаются из cdn.jsdelivr.net, а не с нашего сервера
- Metadata.js опубликована в cdn и доступна по адресу //cdn.jsdelivr.net/metadata/latest/metadata.min.js

# v0.9.201

### 20.11.2015
- Изменена структура каталогов проекта для совместимости с _cdn.jsdelivr.net_

### 25.11.2015
- Реализована возможность указать в метаданных объекта специальные url, которые будут использованы для получения данных через _irest_

### 26.11.2015
- Новый метод менеджера ссылочных типов _load_cached_server_array_ - догружает с сервера объекты, которых нет в локальном кеше

### 29.11.2015
- Иконки на кнопках типовых форм заменены с _png_ на шрифтовые _fonticon_

### 30.11.2015
- Унифицирована математика для работы с присоединенными файлами БСП

# v0.9.202

### 14.12.2015
- Сборщик проекта заменён с LMD на Gulp

### 16.12.2015
- Методы, используемые сервером metadata (postgres + nodejs), вынесены в отдельный модуль

# v0.9.204

### 27.12.2015
- Библиотека dhtmlx обновлена до версии 4.6
- Служебные графические файлы dhtmlx заменены base64-строками и включены в css и js

# v0.9.206

### 27.01.2016
- Добавлена поддержка классов данных _Бизнес процесс_ и _Задача_

# v0.9.207

### 10.02.2016
- Оптимизирована работа с составными типами _Ссылка_ + _Строка_ + _Число_

### 11.02.2016
- Реализован метод _Свернуть_ для класса _TabularSection_

### 13.02.2016
- Реализован метод _Сортировать_ для класса _TabularSection_

### 14.02.2016
- Реализован метод _aggregate_ для класса _TabularSection_, вычисляющий произвольную агрегатную функцию по колонкам табличной части

# v0.10.208

## Мажорное обновление, существенные изменения API

### 18.02.2016
- Самописный движок репликации заменён библиотекой [PouchDB](//pouchdb.com/) - промышленный стандарт CRDT
- Основным серверным движком данных теперь является не информационная база 1С с опубликованными веб-сервисами, а NoSQL база [CouchDB](http://couchdb.apache.org/). Прямое обращение к ресурсам 1С сохранено для совместимости

### 20.02.2016
- Свойство _lc_changed_ удалено из прототипа _DataObj_
- Удалены устаревшие обработчики событий _AppCache_

### 26.02.2016
- В метаданных регистров сведений, бухгалтерии и накопления поддержано семейство _Реквизиты_
- Код, проверяющий, удовлетворяет ли объект условию _selection_, вынесен в публичный метод _$p._selection()_
- В прототипе _DataManager_ реализованы методы загрузки и фильтрации данных, хранящихся в локальной PouchDB

### 16.03.2016
- Для документов, кешируемых в PouchDB, реализовн обработчик установки нового номера

### 18.03.2016
- В элементах управления _OTabular_ и _OHeadFields_ добавлена поддержка событий клавиатуры {Ins} и {Del}
 
### 19.03.2016
- В классе _DataObj_ реализованы методы _extra_fields_ и _extra_properties_ для получения списка дополнительных реквизитов и сведений объекта, заданных в справочнике _НаборыДополнительныхРеквизитовИСведений_
- Изменён способ хранения информации об именах предопределенных элементов для совместимости с базами 1С - ссылочным типам добавлено свойство _ИмяПредопределенныхДанных_

### 23.03.2016
- В прототипах _DataObj_ и _DataManager_ реализованы методы для работы с вложениями и присоединенными файлами PouchDB
- В классе _Toolbar_filter_ поддержано добавление пользовательских отборов и связанных с ними элементов управления

### 25.03.2016
- В динамических списках реализована поддержка индексов _design_doc/view_ PouchDB

### 26.03.2016
- Состав метаданных дополнен объектом _Роль_, что позволит реализовать стандартные, на уровне ядра, механизмы уарвления видимостью и доступностью элементов управления и записей базы данных

# v0.10.209

### 29.03.2016
- Для объектов данных реализовано свойство _Модифицированность_

### 31.03.2016
- В формах объектов при закрытии реализован анализ свойства _Модифицированность_, вопрос о записи или отмене сделанных изменений

### 05.04.2016
- Исправлена ошибка потери модальности при открытии вложенных форм объектов и списков
- Исправлена ошибка сброса признака _Модифицированность_ при записи в PouchDB
- В параметры работы программы добавлено свойство keep_hash, задающее режим открытия вложенных форм - через глобальное изменение hash url или модальное открытие без регистрации в history

### 07.04.2016
- В ядро интегрирована библиотека [Aes](http://www.movable-type.co.uk/scripts/aes.html) для шифрования и дешифрования данных
- Реализованы отборы по массиву значений типа перечисление для свойства метаданных _ПараметрыПыбора_. Ранее, перечисления фильровались только по подстроке синонима
- В формах списка и выбора grid.reload теперь возвращает промис 

### 13.04.2016
- В прототипы _DataObj_ и _TabularSection_ добавлен метод `_silent`, отключающий нотификацию об изменениях объекта
- Реализована синхронизация с 1С и CouchDB объектов с составным ключом: таких, как _Регистр сведений_ и _Регистр накопления_. Ранее, прозрачная синхронизация поддерживалась только для объектов ссылочного типа

### 14.04.2016
- Исправлена ошибка компонента OHeadFields при работе с табличными частями допреквизитов с включенным отбором строк

### 15.04.2016
- Изменена стркутура журнала регистрации для совместимости с новым форматом _RegisterRow_

### 16.04.2016
- Добавлена возможность отложенной инициализации геокодера Google для ускорения загрузки

### 17.04.2016
- Добавлен класс _SpreadsheetDocument_ (аналог табличного документа в 1С) и методы формирования печатных форм на стороне клиента, в том числе, в автономном режиме. Ранее, отчеты и печатные формы можно было сформировать только на сервере средставми платформы 1С

### 18.04.2016
- В прототип _Number_ добавлен метод _in_words_, формирующий сумму прописью [rubles.js](https://github.com/meritt/rubles)
- В формы списков добавлена поддержка иерархических справочников, кешируемых в базе _doc_ PouchDB. Ранее, формы иерархических списков могли работать только с объектами, кешируемыми в ОЗУ или на севрере

# v0.10.210

### 25.04.2016
- Исправлена ошибка при выгрузке из памяти незаписанного _DataObj_

# v0.10.211

### 04.05.2016
- Реализованы автоформы регистров сведений и наклпления. Ранее, автоформы генерировались только для объектов ссылочных типов

### 09.05.2016
- В прототип _DataManager_ добавлены подписки на события при добавлении и при удалении строк табличных частей

### 12.05.2016
- В прототип _DataManager_ добавлен метод _pouch_load_view_, позволяющий загрузить в ОЗУ массив объектов, обрезанный _view_

### 13.05.2016
- **!important** Геттеры и Сеттеры полей и табличных частей _DataObj_ сделаны переопределяемыми (в конструкторе _defineProperty_ свойство _configurable_ установлено в _true_). Теперь, еще больше свободы в определении и переопределении поведения объектов данных со стороны приложения