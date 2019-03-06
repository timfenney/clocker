class Event < ApplicationRecord
  self.inheritance_column = nil
  belongs_to :person
end
