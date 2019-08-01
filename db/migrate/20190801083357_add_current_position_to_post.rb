class AddCurrentPositionToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :latitude, :integer
    add_column :posts, :longitude, :integer
    add_column :posts, :image, :string
  end
end
