import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, User, LogOut, Settings, Package, Truck, Shield, MessageSquare, BarChart3 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Notifications } from './Notifications';

export function MainHeader() {
  const { user, profile, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // ALL HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL RETURNS
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Show loading state while auth is initializing
  if (loading) {
    return (
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center group">
              <Truck className="h-8 w-8 text-orange-600 group-hover:scale-110 transition-transform duration-200" />
              <button onClick={() => navigate('/')} className="ml-2 text-2xl font-bold text-gray-900">
                <span className="text-orange-500">Link</span>Trans
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="animate-pulse bg-gray-200 h-8 w-24 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getDashboardPath = () => {
    if (!profile) return '/';
    switch (profile.user_type) {
      case 'admin': return '/admin';
      case 'carrier': return '/carrier';
      case 'client': return '/client';
      default: return '/';
    }
  };

  const getUserTypeLabel = () => {
    switch (profile?.user_type) {
      case 'admin': return 'Administrator';
      case 'carrier': return 'Przewoźnik';
      case 'client': return 'Klient';
      default: return 'Użytkownik';
    }
  };

  const getUserTypeIcon = () => {
    switch (profile?.user_type) {
      case 'admin': return <Shield className="w-4 h-4" />;
      case 'carrier': return <Truck className="w-4 h-4" />;
      case 'client': return <Package className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const getSettingsPath = () => {
    if (!profile) return '/';
    switch (profile.user_type) {
      case 'admin':
        return '/admin/settings';
      case 'carrier':
        return '/carrier/settings';
      case 'client':
        return '/client/settings';
      default:
        return '/';
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center group">
            <Truck className="h-8 w-8 text-orange-600 group-hover:scale-110 transition-transform duration-200" />
            <button onClick={() => navigate('/')} className="ml-2 text-2xl font-bold text-gray-900">
              <span className="text-orange-500">Link</span>Trans
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {user && profile?.user_type === 'carrier' && (
              <Link
                to="/carrier"
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-colors group"
              >
                <Truck className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Dla przewoźników</span>
              </Link>
            )}
            {user && profile?.user_type === 'client' && (
              <Link
                to="/client"
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-colors group"
              >
                <Package className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Dla klientów</span>
              </Link>
            )}
            {user && profile?.user_type === 'admin' && (
              <Link
                to="/admin"
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-colors group"
              >
                <Shield className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Panel admin</span>
              </Link>
            )}
            
            <Link to="/search" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Szukaj zleceń
            </Link>
            
            {user && profile?.user_type === 'client' && (
              <Link to="/client/new-shipment" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Dodaj zlecenie
              </Link>
            )}
            
            <Link to="/pricing" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Cennik
            </Link>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Notifications />
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      {getUserTypeIcon()}
                      <span className="hidden sm:block">{profile?.full_name || 'Użytkownik'}</span>
                      <span className="hidden sm:block text-sm text-gray-500">({getUserTypeLabel()})</span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                      <Link
                        to={getDashboardPath()}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <BarChart3 className="w-4 h-4 mr-3" />
                        Dashboard
                      </Link>
                      <Link
                        to={getSettingsPath()}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Settings className="w-4 h-4 mr-3" />
                        Ustawienia
                      </Link>
                      <Link
                        to="/messages"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <MessageSquare className="w-4 h-4 mr-3" />
                        Wiadomości
                      </Link>
                      <hr className="my-1" />
                      <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Wyloguj
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                  Zaloguj się
                </Link>
                <Link
                  to="/register"
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                >
                  Zarejestruj się
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
