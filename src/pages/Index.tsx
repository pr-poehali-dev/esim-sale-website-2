import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const countries = [
    {
      name: "США",
      flag: "🇺🇸",
      plans: ["1GB - 590₽", "5GB - 1590₽", "10GB - 2590₽"],
    },
    {
      name: "Европа",
      flag: "🇪🇺",
      plans: ["1GB - 390₽", "5GB - 1190₽", "10GB - 1890₽"],
    },
    {
      name: "Турция",
      flag: "🇹🇷",
      plans: ["1GB - 290₽", "5GB - 890₽", "10GB - 1490₽"],
    },
    {
      name: "Таиланд",
      flag: "🇹🇭",
      plans: ["1GB - 490₽", "5GB - 1290₽", "10GB - 2090₽"],
    },
    {
      name: "Япония",
      flag: "🇯🇵",
      plans: ["1GB - 690₽", "5GB - 1690₽", "10GB - 2890₽"],
    },
    {
      name: "Китай",
      flag: "🇨🇳",
      plans: ["1GB - 590₽", "5GB - 1590₽", "10GB - 2590₽"],
    },
  ];

  const features = [
    {
      icon: "Zap",
      title: "Мгновенная активация",
      desc: "Получите и активируйте eSIM за 2 минуты",
    },
    {
      icon: "Globe",
      title: "Более 100 стран",
      desc: "Покрытие по всему миру без роуминга",
    },
    {
      icon: "Shield",
      title: "Надёжная связь",
      desc: "Работаем с ведущими операторами",
    },
    {
      icon: "CreditCard",
      title: "Простая оплата",
      desc: "Картой, СБП или криптовалютой",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Smartphone" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                eSIM Store
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#catalog"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#payment"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Оплата
              </a>
              <a
                href="#support"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Поддержка
              </a>
            </nav>
            <Button variant="outline" className="hidden md:block">
              <Icon name="User" size={16} className="mr-2" />
              Вход
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">
                Новая технология связи
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Путешествуйте с <span className="text-blue-600">eSIM</span> без
                границ
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Мобильный интернет в любой точке мира. Без замены SIM-карты, без
                роуминга, без переплат.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Выбрать тариф
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/2d8d94fb-5953-48a8-b128-1a75db400165.jpg"
                alt="Глобальная сеть eSIM"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600">
              Надёжность и качество связи по всему миру
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={feature.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные направления
            </h2>
            <p className="text-xl text-gray-600">
              Выберите страну и получите eSIM прямо сейчас
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{country.flag}</span>
                    <CardTitle className="text-xl text-gray-900">
                      {country.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {country.plans.map((plan, planIndex) => (
                      <div
                        key={planIndex}
                        className="flex justify-between items-center p-3 bg-slate-50 rounded-lg"
                      >
                        <span className="text-gray-700">
                          {plan.split(" - ")[0]}
                        </span>
                        <span className="font-semibold text-gray-900">
                          {plan.split(" - ")[1]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment */}
      <section id="payment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Способы оплаты
            </h2>
            <p className="text-xl text-gray-600">
              Безопасные и удобные методы оплаты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="CreditCard"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle>Банковские карты</CardTitle>
                <CardDescription>Visa, MasterCard, МИР</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Smartphone"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle>СБП</CardTitle>
                <CardDescription>Система быстрых платежей</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="DollarSign"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle>Криптовалюты</CardTitle>
                <CardDescription>Bitcoin, USDT, Ethereum</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Поддержка 24/7
            </h2>
            <p className="text-xl text-gray-600">Мы всегда готовы помочь вам</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="MessageCircle"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle>Онлайн-чат</CardTitle>
                <CardDescription>
                  Мгновенные ответы на ваши вопросы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Начать чат
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Mail"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle>Email</CardTitle>
                <CardDescription>support@esim-store.ru</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Написать
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="HelpCircle"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle>FAQ</CardTitle>
                <CardDescription>Ответы на частые вопросы</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="HelpCircle" size={16} className="mr-2" />
                  Посмотреть
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Smartphone" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">eSIM Store</span>
              </div>
              <p className="text-gray-400">Мобильный интернет без границ</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Европа
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Азия
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Америка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Все страны
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Как подключить
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Тех. поддержка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@esim-store.ru</li>
                <li>+7 (800) 123-45-67</li>
                <li>Telegram: @esim_support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 eSIM Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
