class Bird < ActiveRecord::Base
  has_many :bird_houses
  has_many :houses, through: :bird_houses

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true

  validate :starts_with_bird

  private

  def starts_with_bird
    unless name.nil? || name.start_with?('bird')
      errors.add(:name, "Must Start With Bird")
    end
  end
end
