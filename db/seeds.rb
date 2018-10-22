# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

quotes = ['Работаю переводчиком, в основном детективов и фэнтези. Сидим с мужем, я вслух прикидываю грядущие денежные поступления:
  - Вот еще должен прийти гонорар за маньяка, потом гонорар за ведьму...
  Муж:
  - У меня такое впечатление, что я живу с ведьмаком или еще каким-нибудь охотником на монстров.', 
'Обсуждение, кто когда путал кредитку с другими документами:

xxx: Один раз вместо прав гибддэшнику просунул. А он мне в ответ: «У нас только наличный расчет!»', 
'- А чего это наш эникейщик не курит, не пьёт, не ест?
- Мы по ошибке overqualified сисадмина взяли, он тут умер со скуки. А работает, потому что чувство долга.']

ratings = [11, 0, 5]

quotes.each_with_index {|quote, index| Quote.create(content: quote, rating: ratings[index])}