class RenameBirdHouses < ActiveRecord::Migration
  def change
    rename_table :bird_houses, :birds_houses
  end
end
