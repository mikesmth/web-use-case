import { BrowserRouter, Routes, Route, Link } from 'react-router'

export const App = () => {
    return (
        <BrowserRouter>
            <div className='app-container'>
                <header className='header'>
                    <Link to='/' className='logo'>Городской квартал</Link>
                    <nav className='nav-links'>
                        <Link to='/'>Главная</Link>
                        <Link to='/visitor'>Посетитель</Link>
                        <Link to='/resident'>Резидент</Link>
                        <Link to='/organizer'>Организатор</Link>
                        <Link to='/employee'>Сотрудник</Link>
                        <Link to='/admin'>Администратор</Link>
                        <Link to='/manager'>Менеджер</Link>
                        <Link to='/system'>Служебные сервисы</Link>
                    </nav>
                </header>

                <main className='main-content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/visitor' element={<Visitor />} />
                        <Route path='/resident' element={<Resident />} />
                        <Route path='/organizer' element={<Organizer />} />
                        <Route path='/employee' element={<Employee />} />
                        <Route path='/admin' element={<Admin />} />
                        <Route path='/manager' element={<Manager />} />
                        <Route path='/system' element={<SystemServices />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

const Home = () => {
    return (
        <div className='page-content'>
            <div className='page-header'>
                <h1>Система управления современным городским кварталом</h1>
                <p className='subtitle'>Выберите роль пользователя для просмотра доступных функций</p>
            </div>

            <div className='card-grid'>
                <Link to='/visitor' className='card'>
                    <div className='card-header'>
                        <h3>Посетитель</h3>
                    </div>
                    <div className='card-body'>
                        <p>Приходит в квартал, чтобы им пользоваться: посещать мероприятия, магазины и рестораны.</p>
                    </div>
                    <div className='card-footer'>
                        <span className='btn'>Смотреть функции</span>
                    </div>
                </Link>

                <Link to='/resident' className='card'>
                    <div className='card-header'>
                        <h3>Резидент</h3>
                    </div>
                    <div className='card-body'>
                        <p>Открывает магазин, ресторан или мастерскую на территории квартала.</p>
                    </div>
                    <div className='card-footer'>
                        <span className='btn'>Смотреть функции</span>
                    </div>
                </Link>

                <Link to='/organizer' className='card'>
                    <div className='card-header'>
                        <h3>Организатор мероприятия</h3>
                    </div>
                    <div className='card-body'>
                        <p>Устраивает временные события (лекции, фестивали) на площадках квартала.</p>
                    </div>
                    <div className='card-footer'>
                        <span className='btn'>Смотреть функции</span>
                    </div>
                </Link>

                <Link to='/employee' className='card'>
                    <div className='card-header'>
                        <h3>Сотрудник квартала</h3>
                    </div>
                    <div className='card-body'>
                        <p>Базовый актер для сотрудников. Включает общие функции мониторинга расписания.</p>
                    </div>
                    <div className='card-footer'>
                        <span className='btn'>Смотреть функции</span>
                    </div>
                </Link>

                <Link to='/admin' className='card'>
                    <div className='card-header'>
                        <h3>Администратор</h3>
                    </div>
                    <div className='card-body'>
                        <p>Управляет инфраструктурой: помещениями, залами и общей информацией о квартале.</p>
                    </div>
                    <div className='card-footer'>
                        <span className='btn'>Смотреть функции</span>
                    </div>
                </Link>

                <Link to='/manager' className='card'>
                    <div className='card-header'>
                        <h3>Менеджер</h3>
                    </div>
                    <div className='card-body'>
                        <p>Обрабатывает запросы резидентов и организаторов, управляет событиями и резидентами.</p>
                    </div>
                    <div className='card-footer'>
                        <span className='btn'>Смотреть функции</span>
                    </div>
                </Link>

                <Link to='/system' className='card card-secondary'>
                    <div className='card-header'>
                        <h3>Служебные сервисы</h3>
                    </div>
                    <div className='card-body'>
                        <p>Внешние акторы и автоматические служебные сценарии системы.</p>
                    </div>
                    <div className='card-footer'>
                        <span className='btn btn-secondary'>Смотреть функции</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

const Visitor = () => {
    return (
        <div className='page-content'>
            <div className='page-header'>
                <h1>Функции Посетителя</h1>
                <p className='subtitle'>Варианты использования актора «Посетитель»</p>
            </div>

            <div className='card-grid'>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Посмотреть информацию о квартале</h4>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Посмотреть список резидентов</h4>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Посмотреть информацию о резиденте</h4>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Посмотреть календарь мероприятий</h4>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Посмотреть информацию о мероприятии</h4>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Записаться на мероприятие</h4>
                        <div className='relation-tag relation-include'>Включает: Отправить уведомление</div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Отменить запись</h4>
                        <div className='relation-tag relation-include'>Включает: Отправить уведомление</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Resident = () => {
    return (
        <div className='page-content'>
            <div className='page-header'>
                <h1>Функции Резидента</h1>
                <p className='subtitle'>Варианты использования актора «Резидент»</p>
            </div>

            <div className='card-grid'>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Посмотреть свободные помещения</h4>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Запросить помещение</h4>
                        <div className='relation-tag relation-include'>Включает: Проверить наличие помещения</div>
                        <div className='relation-tag relation-include'>Включает: Указать контактные данные</div>
                        <div className='relation-tag relation-include'>Включает: Указать желаемое помещение</div>
                        <div className='relation-tag relation-include'>Включает: Предоставить информацию о проекте</div>
                        <div className='relation-tag relation-include'>Включает: Отправить уведомление</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Organizer = () => {
    return (
        <div className='page-content'>
            <div className='page-header'>
                <h1>Функции Организатора мероприятия</h1>
                <p className='subtitle'>Варианты использования актора «Организатор мероприятия»</p>
            </div>

            <div className='card-grid'>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Посмотреть свободные даты</h4>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Запросить проведение мероприятия</h4>
                        <div className='relation-tag relation-include'>Включает: Проверить доступность даты</div>
                        <div className='relation-tag relation-include'>Включает: Указать контактные данные</div>
                        <div className='relation-tag relation-include'>Включает: Указать желаемое помещение</div>
                        <div className='relation-tag relation-include'>Включает: Предоставить информацию о проекте</div>
                        <div className='relation-tag relation-include'>Включает: Отправить уведомление</div>
                        <div className='relation-tag relation-extend'>Расширяется: Согласовать проведение мероприятия (Городская служба)</div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Посмотреть записавшихся</h4>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Отменить мероприятие</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Employee = () => {
    return (
        <div className='page-content'>
            <div className='page-header'>
                <h1>Функции Сотрудника квартала</h1>
                <p className='subtitle'>Базовый актер (обобщение для Администратора и Менеджера)</p>
            </div>

            <div className='card-grid'>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Посмотреть календарь занятости помещений</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Admin = () => {
    return (
        <div className='page-content'>
            <div className='page-header'>
                <h1>Функции Администратора</h1>
                <p className='subtitle'>Наследует функции Сотрудника квартала</p>
            </div>

            <div className='card-grid'>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Управлять помещениями</h4>
                        <div className='relation-tag relation-generalization'>Обобщает: Добавить помещение</div>
                        <div className='relation-tag relation-generalization'>Обобщает: Удалить помещение</div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Изменить информацию о квартале</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Manager = () => {
    return (
        <div className='page-content'>
            <div className='page-header'>
                <h1>Функции Менеджера</h1>
                <p className='subtitle'>Наследует функции Сотрудника квартала</p>
            </div>

            <div className='card-grid'>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Обработать запрос на помещение</h4>
                        <div className='relation-tag relation-include'>Включает: Принять решение по запросу</div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Обработать запрос на проведение мероприятия</h4>
                        <div className='relation-tag relation-include'>Включает: Принять решение по запросу</div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Управлять резидентами</h4>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Управлять мероприятиями</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SystemServices = () => {
    return (
        <div className='page-content'>
            <div className='page-header'>
                <h1>Служебные ВИ и внешние сервисы</h1>
                <p className='subtitle'>Вспомогательные сценарии и интеграции с внешними акторами</p>
            </div>

            <div className='card-grid'>
                <div className='card card-secondary'>
                    <div className='card-body'>
                        <h4>Согласовать проведение мероприятия</h4>
                        <div className='relation-tag relation-association'>Актор: Городская служба</div>
                        <div className='relation-tag relation-extend'>Расширяет: Запросить проведение мероприятия (согласование)</div>
                    </div>
                </div>
                <div className='card card-secondary'>
                    <div className='card-body'>
                        <h4>Отправить уведомление</h4>
                        <div className='relation-tag relation-association'>Актор: Сервис уведомлений</div>
                    </div>
                </div>
                <div className='card card-secondary'>
                    <div className='card-body'>
                        <h4>Принять решение по запросу</h4>
                        <div className='relation-tag relation-include'>Включает: Отправить уведомление</div>
                        <div className='relation-tag relation-generalization'>Обобщает: Одобрить запрос</div>
                        <div className='relation-tag relation-generalization'>Обобщает: Отклонить запрос</div>
                    </div>
                </div>
                <div className='card card-secondary'>
                    <div className='card-body'>
                        <h4>Одобрить запрос</h4>
                        <div className='relation-tag relation-generalization'>Вариант: Принять решение по запросу</div>
                    </div>
                </div>
                <div className='card card-secondary'>
                    <div className='card-body'>
                        <h4>Отклонить запрос</h4>
                        <div className='relation-tag relation-generalization'>Вариант: Принять решение по запросу</div>
                        <div className='relation-tag relation-extend'>Расширяется: Указать причину отказа</div>
                    </div>
                </div>
                <div className='card card-secondary'>
                    <div className='card-body'>
                        <h4>Указать причину отказа</h4>
                        <div className='relation-tag relation-extend'>Расширяет: Отклонить запрос (условие: Запрос отклонен)</div>
                    </div>
                </div>
                <div className='card card-secondary'>
                    <div className='card-body'>
                        <h4>Проверить наличие помещения</h4>
                    </div>
                </div>
                <div className='card card-secondary'>
                    <div className='card-body'>
                        <h4>Проверить доступность даты</h4>
                    </div>
                </div>
                <div className='card card-secondary'>
                    <div className='card-body'>
                        <h4>Указать контактные данные</h4>
                    </div>
                </div>
                <div className='card card-secondary'>
                    <div className='card-body'>
                        <h4>Указать желаемое помещение</h4>
                    </div>
                </div>
                <div className='card card-secondary'>
                    <div className='card-body'>
                        <h4>Предоставить информацию о проекте</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
