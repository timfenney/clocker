class Person < ApplicationRecord
  self.inheritance_column = nil

  def self.autocomplete(query)
    Person.includes(:events).where("name ILIKE ?", "#{sanitize_sql_like(query)}%").order(:name).limit(10)
  end
  
  def clocked_in?
    last_event = events.reverse_order.limit(1).first
    return last_event.type == Event::CLOCK_IN if last_event.present?
    return false
  end

  def as_json(options = {}, without_clocked_in=false)
    hash = super(options)
    unless without_clocked_in
      hash[:clocked_in] = clocked_in?
    end
    hash
  end
  
  has_many :events
end
