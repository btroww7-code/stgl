# Strona Główna LinkTrans - Kopie do modyfikacji

> Ostatnia aktualizacja: 2025-01-20

## Opis

Ten folder zawiera kopie plików odpowiadających za frontend strony głównej aplikacji LinkTrans. Pliki zostały skopiowane w celu umożliwienia modyfikacji i ulepszeń (np. dodania animacji) w oddzielnym projekcie.

## Skopiowane pliki

### 1. LandingZbolta.tsx
- **Lokalizacja oryginalna:** `src/pages/LandingZbolta.tsx`
- **Opis:** Główny komponent strony głównej zawierający:
  - Hero section z formularzem zlecenia transportowego
  - Sekcję "Jak to działa?" z 3 krokami
  - Sekcję "Dlaczego LinkTrans?" z korzyściami
  - Opinie klientów
  - Call-to-action
  - Footer

### 2. MainHeader.tsx
- **Lokalizacja oryginalna:** `src/components/MainHeader.tsx`
- **Opis:** Komponent nagłówka strony głównej zawierający:
  - Logo LinkTrans
  - Nawigację (dla zalogowanych i niezalogowanych użytkowników)
  - Menu użytkownika z opcjami dashboard, ustawienia, wiadomości
  - Przyciski logowania/rejestracji

## Zależności

Pliki używają następujących zależności:
- React Router DOM (`Link`, `useNavigate`)
- Lucide React (ikony)
- Tailwind CSS (stylowanie)
- Context API (`useAuth`)

## Uwagi do modyfikacji

1. **Importy:** Pliki zawierają importy względne (`../components/MainHeader`, `../contexts/AuthContext`) - mogą wymagać dostosowania w nowym projekcie
2. **Zależności:** Upewnij się, że wszystkie wymagane biblioteki są zainstalowane w nowym projekcie
3. **Stylowanie:** Wykorzystuje Tailwind CSS - może wymagać konfiguracji w nowym projekcie
4. **Funkcjonalność:** Niektóre funkcje mogą wymagać implementacji kontekstów i hooków w nowym projekcie

## Możliwe ulepszenia

- Dodanie animacji CSS/JavaScript
- Implementacja Framer Motion dla płynnych przejść
- Dodanie efektów parallax
- Ulepszenie responsywności
- Dodanie interaktywnych elementów
- Implementacja lazy loading dla obrazów
- Dodanie animacji scroll-triggered

## Struktura oryginalnego projektu

```
src/
├── pages/
│   └── LandingZbolta.tsx (strona główna)
├── components/
│   ├── MainHeader.tsx (nagłówek)
│   └── Notifications.tsx (powiadomienia)
└── contexts/
    └── AuthContext.tsx (kontekst autoryzacji)
```
