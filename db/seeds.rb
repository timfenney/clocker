# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'
jsonblob = <<-LISTEND
["Azral","Azarria","Azriel","Byrne","Bywoods","Bysshe","Czarra","Cyrus","Cyrillus","Dzoba","Dymphia","Dysart","Eziechiele","Ezzo","Fusco","Furr","Gwynne","Gytle","Gyatt","Hyps","Hyozo","Hynes","Hyrup","Izak","Izabel","Izy","Ivonne","Juta","Jutta","Jyoti","Justinian","Justis","Kyrstin","Kynthia","Kyte","Lysander","Lyudmila","Lyontine","Myrwyn","Myrvyn","Nyhagen","Nyssa","Nysa","O'Toole","O'Neill","O'Reilly","O'Shee","Pytlik","Pyotr","Purse","Quitt","Quiteri","Qulllon","Rysler","Ryter","Ryun","Symons","Syst","Symer","Sylvester","Syverson","Tyson","Tyree","Tyre","Uzzial","Uzzia","Utter","Uzzi","Vories","Vyse","Vyky","Vyner","Wyon","Wynn","Wynny","Xymenes","Xenos","Ximenez","Xylon","Yvette","Yuu","Yvonner","Zuzana","Zwiebel"]
LISTEND

first_names = JSON.parse(jsonblob)

people = []
first_names.each do |name|
  person = Person.create({ name: name, type: 'teacher' })
  people << person
end

EVENT_TYPES = ['clock-in', 'clock-out']
people.each do |person|
  times = rand(20)
  (0..times).each do |i|
    index = i % 2
    Event.create(person: person, type: EVENT_TYPES[index])
  end
end
