import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    menu: {
                        moderator_menu1: 'Transport companies',
                        moderator_menu2: 'Managers',
                        moderator_menu3: 'Users',
                        moderator_menu4: 'Feedbacks',
                        moderator_menu5: 'Profile',
                        moderator_menu6: 'Support service',
                        moderator_menu7: 'Log out'
                    },
                    feedbacks: {
                        moderator_first_name: 'First name:',
                        moderator_last_name: 'Last name:',
                        moderator_middle_name: 'Middle name:',
                        moderator_email: 'Email:',
                        moderator_company: 'Company:',
                        moderator_vehicle: 'Vehicle:',
                        moderator_departure: 'Departure:',
                        moderator_arrival: 'Arrival:',
                        moderator_rating: 'Rating:',
                        moderator_all_feedbacks: 'All feedbacks:',
                        moderator_actions: 'Actions',
                        moderator_no_records: 'No records to display',
                        moderator_search: 'Search',
                        moderator_show_feedback: 'Show feedback',
                        moderator_delete_feedback: 'Delete'
                    },
                    tc: {
                        moderator_name: 'Name',
                        moderator_address: 'Address',
                        moderator_phone: 'Phone number',
                        moderator_website: 'Website',
                        moderator_for_moderation: 'For moderation:',
                        moderator_actions: 'Actions',
                        moderator_no_records: 'No records to display',
                        moderator_search: 'Search',
                        moderator_show_doc: 'Show documents',
                        moderator_decline: 'Decline',
                        moderator_accept: 'Accept',
                        moderator_all: 'All:',
                        moderator_delete: 'Delete'
                    },
                    managers: {
                        moderator_first_name: 'First name',
                        moderator_last_name: 'Last name',
                        moderator_middle_name: 'Middle name',
                        moderator_email: 'Email',
                        moderator_company: 'Company',
                        moderator_phone: 'Phone number',
                        moderator_all_managers: 'All managers:',
                        moderator_no_records: 'No records to display'

                    },
                    users: {
                        moderator_first_name: 'First name',
                        moderator_last_name: 'Last name',
                        moderator_middle_name: 'Middle name',
                        moderator_email: 'Email',
                        moderator_phone: 'Phone number',
                        moderator_all_managers: 'All users:',
                        moderator_no_records: 'No records to display'
                    },
                    profile: {
                        moderator_first_name: 'First name',
                        moderator_last_name: 'Last name',
                        moderator_middle_name: 'Middle name',
                        moderator_email: 'Email',
                        moderator_phone: 'Phone number',
                        moderator_load: 'Load',
                        moderator_save: 'Save changes',
                        moderator_change_password: 'Reset password'
                    },
                    support: {
                        moderator_type: 'Type',
                        moderator_first_name: 'First name',
                        moderator_last_name: 'Last name',
                        moderator_middle_name: 'Middle name',
                        moderator_email: 'Email',
                        moderator_phone: 'Phone number',
                        moderator_all_reports: 'All reports:',
                        moderator_no_records: 'No records to display',
                        moderator_show: 'Show report',
                        moderator_group: 'Drag headers here to group by',
                        moderator_rows: 'rows'

                    }
                }
            },
            rus: {
                translation: {
                    menu: {
                        moderator_menu1: 'Транспортные компании',
                        moderator_menu2: 'Менеджеры',
                        moderator_menu3: 'Пассажиры',
                        moderator_menu4: 'Отзывы',
                        moderator_menu5: 'Профиль',
                        moderator_menu6: 'Служба поддержки',
                        moderator_menu7: 'Выйти'
                    },
                    feedbacks: {
                        moderator_first_name: 'Имя:',
                        moderator_last_name: 'Фамилия:',
                        moderator_middle_name: 'Отчество:',
                        moderator_email: 'Email:',
                        moderator_company: 'Компания:',
                        moderator_vehicle: 'Транспортное средство:',
                        moderator_departure: 'Отправление:',
                        moderator_arrival: 'Прибытие:',
                        moderator_rating: 'Оценка:',
                        moderator_all_feedbacks: 'Все отзывы:',
                        moderator_actions: 'Действия',
                        moderator_no_records: 'Нет доступных отзывов',
                        moderator_search: 'Поиск',
                        moderator_show_feedback: 'Показать отзыв',
                        moderator_delete_feedback: 'Удалить'
                    },
                    tc: {
                        moderator_name: 'Название',
                        moderator_address: 'Адрес',
                        moderator_phone: 'Телефон',
                        moderator_website: 'Веб сайт',
                        moderator_for_moderation: 'На модерацию:',
                        moderator_actions: 'Действия',
                        moderator_no_records: 'Нет доступных транспортных компаний',
                        moderator_search: 'Поиск',
                        moderator_show_doc: 'Показать документы',
                        moderator_decline: 'Отклонить',
                        moderator_accept: 'Принять',
                        moderator_all: 'Все:',
                        moderator_delete: 'Удалить'
                    },
                    managers: {
                        moderator_first_name: 'Имя',
                        moderator_last_name: 'Фамилия',
                        moderator_middle_name: 'Отчество',
                        moderator_email: 'Email',
                        moderator_company: 'Компания',
                        moderator_phone: 'Телефон',
                        moderator_all_managers: 'Все менеджеры:',
                        moderator_no_records: 'Нет доступных менеджеров'

                    },
                    users: {
                        moderator_first_name: 'Имя',
                        moderator_last_name: 'Фамилия',
                        moderator_middle_name: 'Отчество',
                        moderator_email: 'Email',
                        moderator_phone: 'Телефон',
                        moderator_all_managers: 'Все пассажиры:',
                        moderator_no_records: 'Нет доступных пассажиров'
                    },
                    profile: {
                        moderator_first_name: 'Имя',
                        moderator_last_name: 'Фамилия',
                        moderator_middle_name: 'Отчество',
                        moderator_email: 'Email',
                        moderator_phone: 'Телефон',
                        moderator_load: 'Загрузить',
                        moderator_save: 'Сохранить',
                        moderator_change_password: 'Пароль'
                    },
                    support: {
                        moderator_type: 'Тип',
                        moderator_first_name: 'Имя',
                        moderator_last_name: 'Фамилия',
                        moderator_middle_name: 'Отчество',
                        moderator_email: 'Email',
                        moderator_phone: 'Телефон',
                        moderator_all_reports: 'Все жалобы:',
                        moderator_no_records: 'Нет доступных жалоб',
                        moderator_show: 'Показать жалобу',
                        moderator_group: 'Перетащите название столбца для группирования',
                        moderator_rows: 'строк'

                    }
                }

            }
        }
    });

export default i18n;