class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|
      t.integer :max_occupancy, null: false
      t.string  :name, null: false
    end
  end
end
