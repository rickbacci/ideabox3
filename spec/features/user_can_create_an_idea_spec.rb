require 'rails_helper'

RSpec.feature "Idea creation", :type => :feature do


  scenario "User creates a new idea", js: true do

    visit root_path

    fill_in 'title', with: 'New Idea'
    fill_in 'body', with: 'New idea body'

    click_on "Create Idea"

    expect(page).to have_content('New Idea')
    expect(page).to have_content('New idea body')
    expect(page).to_not have_content('0')
  end


  scenario "Users ideas persist apon page reload", js: true do

    visit root_path

    fill_in 'title', with: 'New Idea'
    fill_in 'body', with: 'New idea body'

    click_on "Create Idea"

    expect(page).to have_content('New Idea')
    expect(page).to have_content('New idea body')

    visit root_path

    expect(page).to have_content('New Idea')
    expect(page).to have_content('New idea body')
  end

  scenario "Idea body not truncated", js: true do

    visit root_path

    fill_in 'title', with: 'New Idea'
    fill_in 'body', with: 'New idea body' * 7

    click_on "Create Idea"

    expect(page).to have_content('New Idea')

    expect(page).to_not have_content('...')
  end

  scenario "Idea body is truncated", js: true do

    body = 'New idea body' * 8

    visit root_path

    fill_in 'title', with: 'New Idea'
    fill_in 'body', with: body

    click_on "Create Idea"

    expect(page).to have_content('New Idea')

    expect(page).to have_content('idea...')
  end
end
