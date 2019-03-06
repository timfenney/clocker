class Event < ApplicationRecord
  CLOCK_IN = 'clock-in'
  CLOCK_OUT = 'clock-out'


  self.inheritance_column = nil
  belongs_to :person
end
