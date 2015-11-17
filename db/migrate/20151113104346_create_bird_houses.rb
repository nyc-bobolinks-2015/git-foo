class CreateBirdHouses < ActiveRecord::Migration
  def change
    create_table :bird_houses do |t|
      t.integer :bird_id, null: false
      t.integer :house_id, null: false
      t.timestamps null: :false
    end
  end
end
