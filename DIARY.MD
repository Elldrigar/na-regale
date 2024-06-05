# 1.03.2024 do 9.03.2024

> 9 pierwszych dni wyzwania, zmarnowałem na tworzenie innego pomysłu (docelowo na regale)

# 10.03.2024

> Dla mnie tego dnia zaczyna się wyzwanie 100 commitów :)
> Mam pomysł na aplikację, czuję wielką potrzebę jej ukończenia!

-   W tym dniu zmieniłem Readme oraz dodałem ten dziennik.
-   Zrobiłem research o darmowych oraz płatnych API AI, którę wykorzystam do czytania Praktyk.
-   https://play.ht na razie pada na play.ht

# 11.03.2024

> Dziś zacznę od **autoryzacji** oraz **autentykacji**, użyję do tego _nextAuth.js_,
> więc kilka kolejnych dni bedę się skupiac na wdrożeniu całego systemu rejestracji/logowania.
> Chciałbym uzyć logowania bezhasłowego czyli **Passwordless Authentication with Email**

-   Zainstalowałem kilka componentów shadcn (button, input, label, card, toast)
-   Zainstalowałem nextAuth.js
-   Dodałem Provider-a Githuba oraz Email (passwordless)
-   Oraz ogarnąłem potrzebne .env

# 12.03.2024

> Dzis kolejny dzień z nextAuth, prismą i supabase

-   Ogarnąłem konto na supabase
-   Połączyłem prisme z bazą
-   Wygenerowałem potrzebne modele w prismie
-   Etap konfiguracyjny, chyba zakończony :)

# 13.03.2024

> Dziś szybko z braku czasu

-   Zrobilem page-a z buttonami do logowania za pomoca e-maila oraz github-a
-   To chwilowe rozwiązenie, zacznę to rzeźbić jak logowanie będzie działać :D
-   Button z githubem wyciągnąłem do osobnego componentu z powodu "use client"

# 14.03.2024

> Dziś dzień specjalny, dzień liczby PI, dzień narodzin Alberta Einsteina,
> oraz dzień śmierci Stephen-a Hawking-a.
> W tym dniu zmarł również mój ojciec, więc dziś jest też kolejna rocznica jego śmierci.
> I dziś padło na zrobienie logout buttona...

-   Dodałem redirect po zalogowaniu się
-   Route z logowaniem (auth) dla użytkowników zalgowanych jest niedostępny
-   Dodałem też button wylogowania się z sesji.

# 15.03.2024

> Dziś podstawowe logowanie się za pomocą githuba lub e-maila (passwordless) zakończone.

-   Dodałem button do logowania
-   Dodałem funkcjonalnośc logowania się za pomoca e-maila i 'magicznego linku'
-   Dodałem Toster do powiadomien o errorze przy e-mailu i o wysłanej wiadomości

# 16.03.2024

> Dziś dzień bez kodu.

-   Research API do text to speech ( https://elevenlabs.io/ )
-   Planowanie Aplikacji

# 17.03.2024

> Niedziela krótka historia, planowanie projektu łatwe nie jest.

-   Planowanie ciąg dalszy
-   Dodałem do usera role, admina oraz user-a
-   Walczyłem również z błędem z Prismy :(

# 18.03.2024

> Chaos, chaos, chaos XD

-   Zacząłem refactor chaosu

# 19.03.2024

> Reset, totalny reset, zaczynam od zera :D

-   Usunąłem wszystkie poprzednie pliki z projektu
-   Zainstalowałem do nowa Next.js-a, shadcn, prettiera itd.

# 20.03.2024

> Nowy początek i od razu lepiej

-   Landing page który mi się podoba
-   Dodany button "zacznij tutaj", który przenosi do logowania
-   Do readme dodałem screen

# 21.03.2024

> Kilka dni nad auth posiedzę na pewno...

-   Dodane komopnenty do logowania
-   Komponenty na logowanie przez sociale

# 22.03.2024

> Do walidacji inputów użyję ZOD-a

-   Dodałem pierwszy schema do logowania

# 23.03.2024

> Logowanie na śniadanie

-   Resolver z login schema do logowania
-   Formy do logowania w komponencie

# 24.03.2024

> Rejestracja na obiadek

-   Dokończyłem logowanie
-   Dodałem Action do logowania
-   Zacząłem formy do rejestracji

# 25.03.2024

> Logowanie i Rejestracja gotowe.

-   Dodałem schema do rejestracji
-   Dokończyłem form do logowania
-   Action do rejestracji

# 26.03.2024

> ORM and DB

-   Zainstalowana Prisma
-   Zainicjowana Prisma
-   Ogarnięcie ENV i DB

# 27.03.2024

> Zdecydowałem na chwilę obecna użyć database jako SupaBase, z PRISMA ORM

-   Ogarnąłem konto na supabase
-   Wygenerowałem model User-a oraz Account

# 28-29.03.2024

> Tworzenie oraz pobieranie usera w bazie

-   Utworzylem service getUser gdzie mozna pobrac by e-mail i by ID
-   Zmienilem paczke bcrypt na bcryptjs

# 30-03.2024

> nextAuth.js to teraz Auth.js

-   Ziansitalowalem i skonfigurowałem auth.js pod Prisme
-   Zmieniłem matcher w configu na ten z clerk-a

# 31.03.2024 / 01.04.2024

> Wielkanoc, Śmingus oraz Prima Aprilis Combo!

-   Mało czasu na kodowanie, ale kilka minut się znalazło na zmiany w auth config pod login przy pomocy credentilas (e-mial & pass)

# 2.04.2024

> Zaloguj się oraz wyloguj

-   Dodałem button do wylogowania się po zalogowaniu
-   Logowanie przez credentiale działa poprawnie

# 3.04.2024

> User Role ADMIN oraz USER

-   Dodałem do schema role USER oraz ADMIN
-   Wyczyściłem baze oraz wypchnąłem nowe schema z role
-   Naprawiłem błąd TypeScript z role

# 4.04.2024

> TypeScript

-   Pofixowałem problemy z typami

# 5.04.2024

> Github

-   Provioder logowania się za pomocą Githuba
-   Dodanie blokady logowania się bez potwierdzenia e-mail (chwilowa wyłączone)

# 6.04.2024

> Dzień poza domem

-   Update Diary poprzednich dni :)

# 7.04.2024

> Piękny niedzielny dzionek

-   Nowy schema do weryfikacji tokena
-   nowy serwis do tokenów
-   przygotowanie do wysłania e-maila

# 8.04.2024

> 39 Dzień wyzwania, a ja dalej się babram z logowaniem XD

-   Ogarnąłem resend
-   emial lib do wysyłania e-maile przez resend

# 9.04.2024

> Dzień 40, prawie półmetek....

-   Oganięty e-mail weryfikacyjny przy rejestracji
-   Ogarnięty e-mail weryfikacyjny przy logowaniu gdy user nie ma aktywnego konta

# 10.04.2024

> dzień 41

-   organizacyjne rzeczy poza kodowe, domena na resend, lipa bo trzeba mieć z sufixem .com :(

# 11.04.2024

> Dzień 42

-   Reset password funkcjonalność ogarnięta, jutro tylko ogarnąć jeszcze form do resetu z linka z e-maila

# 12.04.2024

> dzień 43, piątek, piątunio :)

-   Form do resetu oagrnięty, reset hasła działa poprawnie

# 13.04.2024

> Debbuging, siedzi gdzieś ten cholerny robaczek

-   Dzień bez nowego kodu, staram się naprawić bug-a który mi zapętla logowanie i wysłanie tokenu do weryfikacji

# 14.04.2024

> Dzionek 45!

-   2FA implementacja
-   Tokeny ogarnięte, resend też, jutro dokończę całą funkcjonalność, tym samym rejestracja i logowanie zakończone!

# 15.04.2024

> 46 Dzionek, całe flow logowania/rejestrowania zakończone?

-   2FA zakonczone
-   Jednak podczas testów, mam problem z walidacją passworda przed wysłaniem kodu 2FA, kod sie wysyła nawet przy błędnym haśle!
-   Wiec jutro ostatnie szlify i poprawki...

# 16.04.2024

> Dzień 47, totalnie brak siły

-   Utworzyłęm action do wylogowania przy use server

# 18.04.2024

> Dzień 49 wyzwania 100 commitów, prawie półmetek, a aplikacja w powijakach XD

-   Czas na use client, i budowanie menu settings po zalogowaniu

# 19.04.2024

> Dzień 50! PÓŁMETEK! Masakra!

-   Zaczynam layout strony, navbar na początek

# 20.04.2024

> Dzień 51, sobota

-   Do uzupełnienia, praca przy layout

# 21.04.2024

> Dzień 52, niedziela

-   Dodałem dropdownmenu, z profile oraz settigami, ale na razie nie aktywne,

# 22.04.2024

> Dzień 53, poniedziałek

-   Potworzyłem page pod każde menu.

# 23.04.2024

> Dzień 54, zostało 198 uczestników z 466

-   Nic

# 24.04.2024

> Dzień 55, zacząć czas tworzyć model i schema pod best practices

-   Prisma schema dla kategori oraz postów
-   API GET dla kategorii

# 25.04.2024

> Dzień 56, łóżko i research

-   Co za pogoda, choróbsko rozkłada...

# 26.04.2024

> Dzień 57

-   Do uzupełnienia

# 29.04.2024

> Dzień 60, Profile user

-   component użytkownika

# 1.05.2024

> Dzień 62,

-   Profil użytkownika done

# 20.05.2024

> dzień 81, 19 dni do końca

- Długo nie było wpisu tutaj

# 28.05.2024

> Dzień 89! zostało 11 dni do końca wyzwania 100dni :D
> Od dziś refaktoryzuję cały projekt na osobnym branchu, a do głównej gałęzi będę tylko pushował tutaj diary :D

- Refaktor dzień 1

> Dzień 90! 10 dni do końca!

- Refaktor dzień 2

> Dzień 91 9 dni ....

- Dummy...

> 92 Dzień, 8 dni....

- Dummy...

> 93 Dzień, 7 dni.. XD

- Dummy ...

> 94 Dzień, 6 dni... :-D

- Ja chce tylko zagłosować na inne wymiatające projekty XD

> 95 Dzień, 5 dni...

- Dziś kot rozwalił mi monitor kubkiem po kawie... :(

> 96 Dzień, nowy monitor zamówiony... XD

> 97 Dzień, monitor rozpakowany :D

