class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.integer :gender, default: 0
      t.date :birth_date
      t.string :location
      t.string :phone_number
      t.string :email
      t.text :headline
      t.string :picture

      t.timestamps null: false
    end
  end
end
