import { Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, Calendar, Package, TrendingUp, Shield, Clock, Users, 
  CheckCircle, Star, ArrowRight, Truck, Phone, Mail 
} from 'lucide-react';
import { MainHeader } from '../components/MainHeader';

function LandingZbolta() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <MainHeader />

      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Znajdź najtańszy<br />
                <span className="text-orange-600">transport</span> w Polsce<br />
                i Europie
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Porównaj oferty od setek przewoźników i zaoszczędź nawet do 70% na kosztach transportu
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  <span className="text-gray-700">Bezpłatne zlecenie</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  <span className="text-gray-700">Bez prowizji</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <Truck className="relative h-64 w-64 text-orange-600 mx-auto" />
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Utwórz zlecenie transportowe</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Skąd</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Miasto, kod pocztowy"
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dokąd</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Miasto, kod pocztowy"
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900"
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data załadunku</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rodzaj ładunku</label>
                <div className="relative">
                  <Package className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 appearance-none">
                    <option>Paleta</option>
                    <option>Paczka</option>
                    <option>Meble</option>
                    <option>Samochód</option>
                    <option>Inne</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Wymiary</label>
                <input
                  type="text"
                  placeholder="np. 120x80x100 cm"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900"
                />
              </div>
            </div>
            <button onClick={() => navigate('/register')} className="w-full bg-orange-600 text-white py-4 rounded-lg hover:bg-orange-700 font-semibold text-lg transition shadow-lg hover:shadow-xl flex items-center justify-center">
              Znajdź przewoźnika
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Jak to działa?</h2>
            <p className="text-xl text-gray-600">Prosta i szybka ścieżka do znalezienia przewoźnika</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Opisz przesyłkę</h3>
              <p className="text-gray-600">Wypełnij prosty formularz z szczegółami Twojego transportu</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Otrzymaj oferty</h3>
              <p className="text-gray-600">Przewoźnicy zgłoszą się z konkurencyjnymi cenami</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wybierz najlepszą</h3>
              <p className="text-gray-600">Porównaj oferty i wybierz najkorzystniejszą dla Ciebie</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dlaczego LinkTrans?</h2>
            <p className="text-xl text-gray-600">Twoje korzyści z korzystania z naszej platformy</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Oszczędzaj do 70%</h3>
              <p className="text-gray-600">Porównaj oferty i wybierz najkorzystniejszą cenę</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <Shield className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bezpieczne płatności</h3>
              <p className="text-gray-600">System zabezpieczeń i weryfikacji przewoźników</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <Clock className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Szybka realizacja</h3>
              <p className="text-gray-600">Oferty w ciągu kilku minut od złożenia zlecenia</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">50 000+ użytkowników</h3>
              <p className="text-gray-600">Dołącz do zadowolonych klientów w całej Europie</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Opinie naszych klientów</h2>
            <p className="text-xl text-gray-600">Zobacz, co mówią o nas użytkownicy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Świetna platforma! Zaoszczędziłem 60% na transporcie mebli. Przewoźnik był punktualny i profesjonalny."</p>
              <p className="font-semibold text-gray-900">Jan Kowalski</p>
              <p className="text-sm text-gray-500">Warszawa</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Korzystam regularnie do transportu towarów dla firmy. Zawsze konkurencyjne ceny i szeroki wybór."</p>
              <p className="font-semibold text-gray-900">Anna Nowak</p>
              <p className="text-sm text-gray-500">Kraków</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Prosty system, szybkie oferty. Znalazłem transport samochodu z Niemiec w doskonałej cenie."</p>
              <p className="font-semibold text-gray-900">Piotr Wiśniewski</p>
              <p className="text-sm text-gray-500">Gdańsk</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Gotowy na oszczędności?</h2>
          <p className="text-xl text-orange-100 mb-8">Dołącz do tysięcy zadowolonych klientów i zacznij oszczędzać na transporcie już dziś</p>
          <button onClick={() => navigate('/register')} className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg transition shadow-lg hover:shadow-xl">
            Utwórz zlecenie za darmo
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Truck className="h-8 w-8 text-orange-600" />
                <span className="ml-2 text-xl font-bold">LinkTrans</span>
              </div>
              <p className="text-gray-400">Platforma łącząca klientów z przewoźnikami w Polsce i Europie</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Firma</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-orange-600 transition">O nas</Link></li>
                <li><Link to="/careers" className="hover:text-orange-600 transition">Kariera</Link></li>
                <li><Link to="/blog" className="hover:text-orange-600 transition">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-orange-600 transition">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dla klientów</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/how-it-works" className="hover:text-orange-600 transition">Jak to działa</Link></li>
                <li><Link to="/pricing" className="hover:text-orange-600 transition">Cennik</Link></li>
                <li><Link to="/help" className="hover:text-orange-600 transition">FAQ</Link></li>
                <li><Link to="/terms" className="hover:text-orange-600 transition">Regulamin</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +48 800 123 456
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  kontakt@linktrans.pl
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LinkTrans. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingZbolta;
