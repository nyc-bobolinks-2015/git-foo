class House < ActiveRecord::Base
  has_many :bird_houses
  has_many :birds, through: :bird_houses

  validates :name, uniqueness: true
  validates :max_occupancy, numericality: { greater_than: 0 }
end
