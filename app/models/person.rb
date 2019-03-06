class Person < ApplicationRecord
  self.inheritance_column = nil

  def self.autocomplete(query)
    Person.where("name ILIKE ?", "#{sanitize_sql_like(query)}%").order(:name).limit(10)
  end
  
  def clocked_in?
    last_event = events.reverse_order.limit(1)
    return last_event == Event::CLOCK_IN
  end

  def as_json(options = {})
    hash = super(options)
    hash[:clocked_in] = clocked_in?
    hash
  end
  
  has_many :events
end
