class AddFloatToPostLatitude < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :latitude, :float
    change_column :posts, :longitude, :float
  end
end
