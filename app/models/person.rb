class Person < ApplicationRecord
  self.inheritance_column = nil
  has_many :events
end
