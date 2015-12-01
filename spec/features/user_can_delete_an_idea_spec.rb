require 'rails_helper'

RSpec.feature "Idea deletion", :type => :feature do

  scenario "User can delete an idea", js: true do

    visit root_path

    fill_in 'title', with: 'New Idea'
    fill_in 'body', with: 'New idea body'

    click_on 'Create Idea'

    expect(page).to have_content('delete')

    click_on 'delete'

    expect(page).to_not have_content('delete')
  end
end
