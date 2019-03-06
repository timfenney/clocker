class Event < ApplicationRecord
  CLOCK_IN = 'clock-in'
  CLOCK_OUT = 'clock-out'

  self.inheritance_column = nil
  belongs_to :person

  def as_json(options = {})
    hash = super(options)
    hash[:person] = person.as_json
    hash
  end
end
