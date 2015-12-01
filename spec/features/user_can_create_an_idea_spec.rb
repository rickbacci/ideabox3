require 'rails_helper'

RSpec.feature "Idea interactions", :type => :feature do


  scenario "User creates a new idea", js: true do

    visit root_path

    fill_in 'title', with: 'New Idea'
    fill_in 'body', with: 'New idea body'

    click_on "Create Idea"

    expect(page).to have_content('New Idea')
    expect(page).to have_content('New idea body')
  end
end
