class CreateBirds < ActiveRecord::Migration
  def change
    create_table :birds do |t|
      t.string :name
      t.string :password_hash
      t.string :email
    end
  end
end
