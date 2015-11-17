class BirdsHouse < ActiveRecord::Base
  belongs_to :bird
  belongs_to :house
end
